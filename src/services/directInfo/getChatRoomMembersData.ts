import axiosInstance from "../axiosInstance";

const getChatRoomMembersData = (id: string): Promise<any> => {
  return axiosInstance({
    method: "get",
    url: `/chat/room/${id}`,
    headers: {
      "Content-Type": "application/json",
      charset: "utf-8",
    },
  });
};

export default getChatRoomMembersData;
