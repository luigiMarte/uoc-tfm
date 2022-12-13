import request from "@/utils/axiosInstance";

/**
 * GET: get all users data
 */
export default function getUsers() {
  const url = "/users";
  return request.get(url);
}
