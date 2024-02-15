import axiosInstance from "../axiosInstance";

const getFollowingPost = (): Promise<any> => {
  return axiosInstance({
    method: "get",
    url: `/post/following-member`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
  });
};

export default getFollowingPost;
