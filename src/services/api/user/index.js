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
 * GET: user data by ID
 */
export function getUser(userId) {
  console.log(userId);
  return axios.post(`"http://localhost:3000/api/auth/${userId}"`);
}

/**
 * GET: pilots by city
 */
export function getPilotsByCity(city) {
  console.log(city.city);
  let url = `http://localhost:3000/api/auth/city/${city.city}`;
  console.log(url);
  //return axios.get(`http://localhost:3000/api/auth/city/${city}`);
  //`http://localhost:8081/product/${encodeURIComponent(state.product.id)}`, payload)
  return axios.get(url);
}

/**
 * POST: new user sign up
 */
export function createUserData(params, userId, token) {
  debugger;
  console.log("api server", params, userId, token);
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

/**
 * PUT: user profile update
 */
export function updateUserProfile(params, userId, token) {
  console.log("api server PUT", params, userId, token);
  return axios.put(`http://localhost:3000/api/auth/${userId}`, params, {
    headers: {
      "x-access-token": token,
    },
  });
}
