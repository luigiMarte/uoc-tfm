import request from "@/utils/axiosInstance";
import axios from "axios";

/**
 * GET: get all users data
 */
export default function getUsers() {
  const url = "/users";
  return request.get(url);
}

/**
 * GET: user data by ID
 */
export function getUserData(userId) {
  console.log(userId);
  return axios.post(`"http://localhost:3000/api/userData/"${userId}`);
}

/**
 * POST: new user sign up
 */
export function createUserData(params, userId, token) {
  debugger;
  console.log("api");
  console.log("api server", params, userId, token);
  console.log("api out");
  //userId = "639dc0697f4bcfea89356276";
  //return axios.post(`"http://localhost:3000/api/userData/"${userId}`, params, {
  return axios.post(
    `"http://localhost:3000/api/userData/"${userId}`,
    {
      params,
    },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
}
