import axios from "axios";
import { CookieStorage, CookiesKeys } from "./cookies";

const http2 = axios.create({
  baseURL: process.env.REACT_APP_SERVER2,
  timeout: 30000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${CookieStorage.get(CookiesKeys.AuthToken) || ""}`,
  },
});

//begal
http2.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${CookieStorage.get(CookiesKeys.AuthToken) ? CookieStorage.get(CookiesKeys.AuthToken) : ""}`,
  };
  return config;
});
export default http2;
