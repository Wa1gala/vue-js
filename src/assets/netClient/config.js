import axios from "axios";

const netClient = axios.create({
  baseURL: "http://localhost:3000/users",
  timeout: 10000,
});

export default netClient;