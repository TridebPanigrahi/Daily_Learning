import axios from "axios";
import { jwtDecode } from "jwt-decode";

// console.log("base_url", import.meta.env.BASE_API_URL);
console.log("base_url", import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
  withCredentials: true,
});

// Request interceptors

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    const decord = jwtDecode(token);
    const isExpired = decord.exp * 1000 < Date.now();
    if (isExpired) {
      localStorage.removeItem("token");
      window.location.href = "/";
      return Promise.reject("Token Expire");
    }
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

//Response Interceptors

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const refreshRes = await api.post("/auth/refresh");
        localStorage.setItem("token", refreshRes.data.accessToken);

        error.config.headers.Authorization = `Bearer ${refreshRes.data.accessToken}`;

        return api(error.config);
      } catch {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  },
);

export default api;
