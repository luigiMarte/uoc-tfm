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
  debugger;
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
  if (userId) {
    return axios.get(`http://localhost:3000/api/auth/${userId}`);
  } else {
    console.log("User not found");
  }
  //return axios.get(`http://localhost:3000/api/auth/${userId}`);
}
