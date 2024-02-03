import axiosInstance from "../axiosInstance";

const getChatRoomData = (roomId: string): Promise<any> => {
  return axiosInstance({
    method: "get",
    url: `/chat/room/${roomId}`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
  });
};

export default getChatRoomData;
