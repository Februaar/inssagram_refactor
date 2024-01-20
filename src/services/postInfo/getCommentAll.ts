import axiosInstance from "../axiosInstance";

const getCommentAll = (postId: number): Promise<any> => {
  return axiosInstance({
    method: "get",
    url: `/comment/search`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
    params: {
      "post-id": postId,
    },
  });
};

export default getCommentAll;
