import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ChatRoomState } from "@/types/ChatRoomTypes";
import ChatListItem from "@/components/Items/ChatList";
import Error from "../atoms/Error";
import getChatListAll from "@/services/directInfo/getChatListAll";

const ChatListContainer = () => {
  const router = useRouter();
  const [chatList, setChatList] = useState<ChatRoomState[] | null>(null);

  const fetchChatListAll = async () => {
    try {
      const res = await getChatListAll();
      setChatList(res.data);
    } catch (err) {
      console.error("error fetching chat list", err);
    }
  };

  useEffect(() => {
    if (!chatList) {
      fetchChatListAll();
    }
  }, [chatList]);

  const handleChatListClick = (id: string) => {
    router.push(`/direct/${id}`);
  };

  return (
    <>
      {chatList && chatList.length > 0 ? (
        chatList.map((list) => (
          <ChatListItem
            key={list.chatroom_id}
            list={list}
            onClick={handleChatListClick}
          />
        ))
      ) : (
        <Error message="참여중인 방이 없습니다" />
      )}
    </>
  );
};

export default ChatListContainer;
