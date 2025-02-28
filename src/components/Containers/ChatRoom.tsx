import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  UserState,
  MessageState,
  PostMessageState,
} from "@/types/ChatRoomTypes";
import ChatRoomHeader from "@/components/atoms/ChatHeader";
import RecevierProfile from "@/components/atoms/Receiver";
import MessageInput from "@/components/Inputs/Message";
import ChatContentsContainer from "@/components/Containers/ChatContents";
import getPreviousMessages from "@/services/directInfo/getPreviousMessages";
import WebSocketHandler from "@/handlers/WebSocketHandler";

interface ChatRoomContainerProps {
  user: any;
  roomId: string;
  membersData: {
    sender: UserState;
    receiver: UserState;
  } | null;
}

const ChatRoomContainer: React.FC<ChatRoomContainerProps> = ({
  user,
  roomId,
  membersData,
}) => {
  const [previousMessages, setPreviousMessages] = useState<MessageState[]>([]);
  const [newMessage, setNewMessage] = useState<PostMessageState | null>(null);

  // 과거 채팅 내용
  const fetchChatHistory = async (roomId: string) => {
    try {
      const res = await getPreviousMessages(roomId);
      setPreviousMessages(res.data);
    } catch (err) {
      console.error("fetching chat history", err);
    }
  };

  useEffect(() => {
    fetchChatHistory(roomId);
  }, [roomId]);

  const handleNewMessageReceived = (message: MessageState) => {
    setPreviousMessages((prevMessages) => [...prevMessages, message]); // 상태 업데이트 추가
    console.log("새로운 메세지!! New message received:", message);
  };

  // 새로운 메세지
  const handleSendClick = (MessageData: any) => {
    setNewMessage(MessageData);
    setPreviousMessages((prevMessages) => [...prevMessages, MessageData]); // 상태 업데이트 추가
  };

  return (
    <>
      {membersData && (
        <>
          <ChatRoomHeader receiver={membersData.receiver} />
          <ChatRoom>
            <div className="chatroom-container">
              <RecevierProfile receiver={membersData.receiver} />
              <ChatContentsContainer
                user={user}
                messages={previousMessages}
                newMessage={newMessage}
              />
            </div>
          </ChatRoom>
          <MessageInput
            roomId={roomId}
            receiver={membersData.receiver}
            onClick={handleSendClick}
          />
          <WebSocketHandler
            roomId={roomId}
            newMessage={newMessage}
            onMessageReceived={handleNewMessageReceived}
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

  .chatroom-container {
    display: flex;
    flex-direction: column;
    align-items: inherit;
    justify-content: flex-end;
    max-width: 100%;
  }
`;
