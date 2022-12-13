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
  return axios.post("http://localhost:3000/api/auth/sign_up", params);
}

/**
 * POST: User login
 */
export function userLogin(params) {
  debugger;
  console.log(params);
  return axios.post("http://localhost:3000/api/auth/sign_in", params);
}
