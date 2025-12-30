const axios = require("axios");

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});
async function loadDashboard() {
  try {
    const [userData, posts, comments] = await Promise.all([
      apiClient.get("/users"),
      apiClient.get("/posts"),
      apiClient.get("/comments"),
    ]);
    console.log(userData);
    return {
      users: userData.data,
      posts: posts.data,
      comments: comments.data,
    };
  } catch (err) {
    console.error(err);
  }
}


loadDashboard()
