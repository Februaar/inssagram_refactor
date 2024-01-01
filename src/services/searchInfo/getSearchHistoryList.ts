import axiosInstance from "../axiosInstance";

const getSearchHistoryList = (): Promise<any> => {
  return axiosInstance({
    method: "get",
    url: `/search`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
  });
};

export default getSearchHistoryList;
