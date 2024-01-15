import axiosInstance from "../axiosInstance";

const postCreatePost = (
  type: string,
  image: string[],
  fileName: string[],
  contents: string | null
): Promise<any> => {
  const postData = {
    type,
    image,
    fileName,
    contents,
  };
  return axiosInstance({
    method: "post",
    url: `/post/create`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
    data: postData,
  });
};

export default postCreatePost;
