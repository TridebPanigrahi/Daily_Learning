const axios = require("axios");
const axiosRetry = require("axios-retry").default;

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axiosRetry(apiClient, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  onRetry: (retryCount, error, requestConfig) => {
    console.log(`Retry Count ${retryCount}`);
    // return;
  },
});

apiClient
  .get("/users")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
