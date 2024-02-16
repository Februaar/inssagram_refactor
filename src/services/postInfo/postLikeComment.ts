import axiosInstance from "../axiosInstance";

const postLikeComment = (commentId: number): Promise<any> => {
  return axiosInstance({
    method: "post",
    url: `/like/comment`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
    params: {
      "comment-id": commentId,
    },
  });
};

export default postLikeComment;
