import axios from "axios";

const ipUrl = axios.create({
  // baseURL: "http://localhost:8080", // 로컬
  baseURL: "https://www.hyunss.com/api", // aws
  // baseURL: "https://www.hyunss.com", // 될거같은데..
  withCredentials: true,
});
export { ipUrl };
