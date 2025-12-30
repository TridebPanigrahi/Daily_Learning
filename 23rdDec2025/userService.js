const apiClient = require("./interceptors");

const userService = {
  getAllusers: () => apiClient.get("/users"),
  getUserById: (id) => apiClient.get(`/users/${id}`),
  updateUser: (id, data) => apiClient.put(`/users/${id}`, data),
};

module.exports = userService;
