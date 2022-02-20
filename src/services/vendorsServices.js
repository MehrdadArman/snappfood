import axiosApiInctance from "./axiosInterceptor";
import * as url from "../assets/data/urlConfigs";

export const getVendorsListAsync = async (params) => {
  return await axiosApiInctance.get(url.vendorsListUrl, {
    params: params,
  });
};
