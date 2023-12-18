import axios from "axios";

const ipUrl = axios.create({
  // baseURL: "http://localhost:8080", // 로컬
  // baseURL: "https://hyunss.com/api",
  // baseURL: "https://hyunss.com",
  baseURL: "https://www.hyunss.com",
  withCredentials: true,
});
export { ipUrl };
