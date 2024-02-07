import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import styled from "styled-components";
import {
  UserState,
  ChatHistoryData,
  NewMessageData,
} from "@/types/ChatRoomTypes";
import ChatRoomHeader from "@/components/atoms/ChatHeader";
import RecevierProfile from "@/components/atoms/Receiver";
import DirectInput from "@/components/Inputs/Direct";
import ChatContentsContainer from "@/components/Containers/ChatContents";
import getChatRoomData from "@/services/directInfo/getChatRoomData";
import getChatHistory from "@/services/directInfo/getChatHistory";

interface ChatRoomContainerProps {
  roomId: any;
}

const ChatRoomContainer: React.FC<ChatRoomContainerProps> = ({ roomId }) => {
  const user = useSelector((state: RootState) => state.user);
  const [chatRoom, setChatRoom] = useState<{
    sender: UserState;
    receiver: UserState;
  } | null>(null);
  console.log(chatRoom);
  const [chatHistory, setChatHistory] = useState<ChatHistoryData[] | null>(
    null
  );
  const [newMessage, setNewMessage] = useState<NewMessageData[] | null>(null);

  const fetchChatRoomData = async (roomId: string) => {
    try {
      const res = await getChatRoomData(roomId);
      console.log(res);
      const memberList = res.memberList;
      const currentUserId = user?.member_id;
      const otherMemberId = Object.keys(memberList).find(
        (memberId) => Number(memberId) !== Number(currentUserId)
      );

      if (currentUserId && otherMemberId) {
        const senderId = currentUserId;
        const receiverId = otherMemberId;
        const sender = memberList[senderId];
        const receiver = memberList[receiverId];

        setChatRoom({
          sender: sender,
          receiver: receiver,
        });
      }
    } catch (err) {
      console.error("fetching chat room data", err);
    }
  };

  const fetchChatHistory = async (roomId: string) => {
    try {
      const res = await getChatHistory(roomId);
      setChatHistory(res.data);
    } catch (err) {
      console.error("fetching chat history", err);
    }
  };

  const handleSendMessage = (message: NewMessageData) => {};

  const handleSendClick = (message: NewMessageData) => {
    handleSendMessage(message);
    setNewMessage(message);
    console.log("Received message:", message);
  };

  useEffect(() => {
    fetchChatRoomData(roomId);
    fetchChatHistory(roomId);
  }, [roomId]);

  return (
    <>
      {chatRoom && chatHistory && (
        <>
          <ChatRoomHeader receiver={chatRoom.receiver} />
          <ChatRoom>
            <div className="container">
              <RecevierProfile receiver={chatRoom.receiver} />
              <ChatContentsContainer
                history={chatHistory}
                newMessage={newMessage}
              />
            </div>
          </ChatRoom>
          <DirectInput
            roomId={roomId}
            receiver={chatRoom.receiver}
            onClick={handleSendClick}
          />
        </>
      )}
    </>
  );
};

export default ChatRoomContainer;

const ChatRoom = styled.div`
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow-anchor: none;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #92a8d1;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: inherit;
    justify-content: flex-end;
    max-width: 100%;
  }
`;
