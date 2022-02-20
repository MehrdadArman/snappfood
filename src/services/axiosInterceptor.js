import { toast } from "react-toastify";

const axios = require("axios");
export const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    // No Response(netError)
    if (error.response === undefined && originalRequest._retry === true) {
      toast.error("خطا در ارتباط با سرور لطفا کمی بعد مجددا تلاش کنید");
      return;
    } else if (error.response === undefined && !originalRequest._retry) {
      originalRequest._retry = true;
      toast.warning("خطا در ارتباط با سرور در حال تلاش مجدد.");
      return axiosApiInstance(originalRequest);
    } else if (error.response.status === 500 && originalRequest._retry) {
      toast.error("خطا داخلی سرور لطفا کمی بعد مجددا تلاش کنید.");
    } else if (error.response.status === 500 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axiosApiInstance(originalRequest);

      // 404
    } else if (error.response.status === 404) {
      toast.error("سرور یافت نشد.");

      // >500
    } else if (error.response.status > 500 && originalRequest._retry) {
      toast.error("خطا در ارتباط با سرور لطفا کمی بعد مجددا تلاش کنید.");
    } else if (error.response.status > 500 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axiosApiInstance(originalRequest);

      // 400
    } else if (error.response.status === 400) {
      toast.error("لطفا کمی بعد مجددا تلاش کنید.");
    }

    return Promise.reject(error);
  }
);

export default axiosApiInstance;
