import axiosInstance from "../axiosInstance";

const deleteNoti = (id: string): Promise<any> => {
  return axiosInstance({
    method: "delete",
    url: `/notification/${id}`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
  });
};

export default deleteNoti;
