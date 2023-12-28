import axiosInstance from "../axiosInstance";

const getNotiAll = (): Promise<any> => {
  return axiosInstance({
    method: "get",
    url: `/notification/all`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
  });
};

export default getNotiAll;
