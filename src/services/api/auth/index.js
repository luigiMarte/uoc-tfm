import request from "@/utils/axiosInstance";
import axios from "axios";

/**
 * GET: get all users data
 */
export function getUsers() {
  const url = "/users";
  return request.get(url);
}

/**
 * POST: new user sign up
 */
export function createUser(params) {
  console.log(params);
  //const baseUrl = import.meta.env.VITE_ROOT_API;
  return axios.post("http://localhost:3000/api/auth/sign_up", params);
}

/**
 * POST: User login
 */
export function userLogin(params) {
  return axios.post("http://localhost:3000/api/auth/sign_in", params);
}

/**
 * GET: user data by ID
 */
export function getUser(userId) {
  console.log("getUser 2", userId);
  if (userId) {
    return axios.get(`http://localhost:3000/api/auth/${userId}`);
  } else {
    console.log("User not found");
  }
  //return axios.get(`http://localhost:3000/api/auth/${userId}`);
}

/**
 * GET: pilot data by ID
 */
export function getPilot(userId) {
  console.log("getPilot 2", userId);
  if (userId) {
    return axios.get(`http://localhost:3000/api/auth/${userId}`);
  } else {
    console.log("User not found");
  }
}
