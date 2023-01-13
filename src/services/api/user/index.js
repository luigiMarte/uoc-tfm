import axiosInstance from "@/utils/axiosInstance";

/**
 * GET: get all users data
 */
// export default function getUsers() {
//   console.log("getUsers -> user");
//   const url = "/users";
//   return axiosInstance.get(url);
// }

/**
 * GET: user data by ID
 */
// export function getUserData(userId) {
//   console.log("userfile getUserData", userId);
//   return axios.post(`"http://localhost:3000/api/userData/"${userId}`);
// }

/**
 * GET: user data by ID
 */
// export function getUser(userId) {
//   console.log("userfile getUser", userId);
//   return axios.post(`"http://localhost:3000/api/auth/${userId}"`);
// }

/**
 * GET: Search pilots by city
 */
export function getPilotsByCity(city) {
  const url = `/auth/city/${city.city}`;
  return axiosInstance.get(url);
}

/**
 * POST: new user sign up
 */
export function createUserData(params, userId, token) {
  console.log("userfile createUserData", params, userId, token);
  //userId = "639dc0697f4bcfea89356276";
  //return axios.post(`"http://localhost:3000/api/userData/"${userId}`, params, {
  return axiosInstance.post(
    `"/userData/"${userId}`,
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
  console.log("api server update", params, userId, token);
  return axiosInstance.put(`/auth/${userId}`, params, {
    headers: {
      "x-access-token": token,
    },
  });
}

/**
 * POST: user profile update
 */
export function addFavorite(params, userId, token) {
  return axiosInstance.post(
    `/auth/favorites/${userId}`,
    {
      id: params.id,
      droneBrand: params.droneBrand,
      droneModel: params.droneModel,
      alias: params.alias,
      price: params.price,
    },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
}

/**
 * DELETE Favorite by ID
 */
export function removeFavorite(id, userId) {
  //console.log("api remove Fav", params);
  //console.log("api remove Fav", userId);
  return axiosInstance.post(
    `/auth/favorites/remove/${userId}`,
    {
      params: {
        id,
        userId,
      },
    }
    // {
    //   headers: {
    //     "x-access-token": token,
    //   },
    // }
  );
}

/**
 * DELETE: DELETE user by ID
 */
export function removeUser(userId, token) {
  console.log("userId 1", userId);
  return axiosInstance.delete(`/auth/${userId}`, {
    headers: {
      "x-access-token": token,
    },
  });
}
