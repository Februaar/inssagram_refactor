import axiosInstance from "../axiosInstance";

const getUserDetail = (id: any): Promise<any> => {
  return axiosInstance({
    method: "post",
    url: `/member/detail/${id}`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
  });
};

export default getUserDetail;
