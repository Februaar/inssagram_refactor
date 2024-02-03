import axiosInstance from "../axiosInstance";

const getChatListAll = (): Promise<any> => {
  return axiosInstance({
    method: "get",
    url: `/chat`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
  });
};

export default getChatListAll;
