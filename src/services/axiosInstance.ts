import axios, { AxiosInstance } from "axios";
import { useRouter } from "next/router";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.SERVER_URL,
  timeout: 0,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (err) => {
    // if (err.response) {
    //   if (err.response.status === 400) {
    //     alert("로그인이 필요합니다.");
    //   }
    // }
    return Promise.reject(err);
  }
);

export default axiosInstance;
