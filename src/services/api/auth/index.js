import axiosInstance from "@/utils/axiosInstance";
//import axios from "axios";

/**
 * GET: get all users data
 */
// export function getUsers() {
//   console.log("getUser 1");
//   const url = "/users";
//   return axiosInstance.get(url);
// }

/**
 * POST: new user sign up
 */
export function createUser(params) {
  //const baseUrl = import.meta.env.VITE_ROOT_API;
  return axiosInstance.post("/auth/sign_up", params);
}

/**
 * POST: User login
 */
// export function userLogin(params) {
//   console.log("login req", params);
//   return axios.post("http://localhost:3000/api/auth/sign_in", params);
// }

export function userLogin(payload) {
  return axiosInstance.post("/auth/sign_in", payload);
}

/**
 * GET: user data by ID
 */
export function getUser(userId) {
  if (userId) {
    return axiosInstance.get(`/auth/${userId}`);
  } else {
    console.log("User not found");
  }
  //return axios.get(`http://localhost:3000/api/auth/${userId}`);
}

/**
 * GET: pilot data by ID
 */
export function getPilot(userId) {
  if (userId) {
    return axiosInstance.get(`/auth/${userId}`);
  } else {
    console.log("User not found");
  }
}
