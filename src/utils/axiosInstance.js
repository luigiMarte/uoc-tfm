import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000/api",
  //baseURL: "https://jsonplaceholder.typicode.com/todos",
  headers: {
    "Content-Type": "application/json;",
  },
});

export default request;
