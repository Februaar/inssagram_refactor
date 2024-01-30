import axiosInstance from "../axiosInstance";

const putUserInfo = (
  id: any,
  nickname: string,
  job: string,
  description: string,
  image: string
): Promise<any> => {
  const UserData = {
    nickname,
    job,
    description,
    image,
  };

  return axiosInstance({
    method: "put",
    url: `/member/update/${id}`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
    data: UserData,
  });
};

export default putUserInfo;
