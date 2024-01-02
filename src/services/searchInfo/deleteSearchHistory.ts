import axiosInstance from "../axiosInstance";

const deleteSearchHistory = (keyword: string): Promise<any> => {
  return axiosInstance({
    method: "delete",
    url: `/search/${keyword}`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
  });
};

export default deleteSearchHistory;
