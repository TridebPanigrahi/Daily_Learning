import axios from "axios";

//Create a Centralise instance
const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

//Request Interceptors
apiClient.interceptors.request.use(
  (config) => {
    const jwtToken =
      localStorage.getItem("token") ||
      "hfafsjhajdahjkdhakjhdkjahwqiuwquiuiqowio";
    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Response Interceptors

apiClient.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default apiClient;
