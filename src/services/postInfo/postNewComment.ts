import axiosInstance from "../axiosInstance";

const postNewComment = (postId: number, contents: string): Promise<any> => {
  const commentData = {
    postId,
    contents,
    // mentionList,
  };
  return axiosInstance({
    method: "post",
    url: `/comment/create`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
    data: commentData,
  });
};

export default postNewComment;
