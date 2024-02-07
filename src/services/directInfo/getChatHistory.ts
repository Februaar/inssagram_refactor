import axiosInstance from "../axiosInstance";

const getChatHistory = (roomId: string): Promise<any> => {
  return axiosInstance({
    method: "get",
    url: `/chat/enter/room`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
    params: {
      "room-id": roomId,
    },
  });
};

export default getChatHistory;
