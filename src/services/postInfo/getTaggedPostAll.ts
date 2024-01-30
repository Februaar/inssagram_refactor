import axiosInstance from "../axiosInstance";

const getTaggedPostAll = (memberId: number): Promise<any> => {
  return axiosInstance({
    method: "get",
    url: `/tagged-post-list`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
    params: {
      "tagged-member-id": memberId,
    },
  });
};

export default getTaggedPostAll;
