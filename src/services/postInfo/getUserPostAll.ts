import axiosInstance from "../axiosInstance";

const getUserPostAll = (memberId: any): Promise<any> => {
  return axiosInstance({
    method: "get",
    url: `/post/member?`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
    params: {
      "member-id": memberId,
    },
  });
};

export default getUserPostAll;
