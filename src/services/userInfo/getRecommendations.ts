import axiosInstance from "../axiosInstance";

const getRecommendations = (
  pageNumber: number,
  pageSize: number
): Promise<any> => {
  return axiosInstance({
    method: "get",
    url: `/member/follow/recommend?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
  });
};

getRecommendations(1, 10)
  .then((response) => {
    // 응답 처리
  })
  .catch((error) => {
    // 오류 처리
  });

export default getRecommendations;
