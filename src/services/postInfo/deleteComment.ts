import axiosInstance from "../axiosInstance";

const deleteComment = (commentId: number): Promise<any> => {
  return axiosInstance({
    method: "delete",
    url: `/comment/delete/${commentId}`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
  });
};

export default deleteComment;
