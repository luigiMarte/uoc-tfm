import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_ROOT_API,
//  });

// const request = axios.create({
//   baseURL: import.meta.env.VITE_ROOT_API,
//   headers: {
//     "Content-Type": "application/json;",
//   },
// });

const defaultOptions = {
  baseURL: import.meta.env.VITE_ROOT_API,
  headers: {
    "Content-Type": "application/json",
  },
};

let axiosInstance = axios.create(defaultOptions);

// api.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
//  );

export default axiosInstance;
