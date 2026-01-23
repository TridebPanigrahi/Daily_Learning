const axios = require("axios");
require("dotenv").config();

//Creating an Centralised instance

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: "5000",
    headers: {
      "Content-Type": "application/json",
    },
});

//Request interceptors

apiClient.interceptors.request.use(
  (config) => {
    const token = process.env.Token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//Response interceptos

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    Promise.reject(error);
  }
);

module.exports = apiClient;
