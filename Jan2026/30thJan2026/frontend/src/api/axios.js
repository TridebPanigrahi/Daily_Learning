import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.BASE_API_URL,
  timeout: 5000,
});

// Request interceptors

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
