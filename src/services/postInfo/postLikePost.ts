import axiosInstance from "../axiosInstance";

const postLikePost = (postId: number): Promise<any> => {
  return axiosInstance({
    method: "post",
    url: `/like/post`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
    params: {
      "post-id": postId,
    },
  });
};

export default postLikePost;
