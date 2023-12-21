import axiosInstance from "../axiosInstance";

const postSignin = (email: any, password: any): Promise<any> => {
  const AccountData = {
    email,
    password,
  };
  
  return axiosInstance({
    method: "post",
    url: `/signin`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
    data: AccountData,
  });
};

export default postSignin;
