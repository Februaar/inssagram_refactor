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
import useChatSocket from "@/hooks/useChatSocket";

interface ChatRoomContainerProps {
  user: any;
  roomId: string;
  membersData: {
    me: UserState;
    other: UserState;
  } | null;
}

const ChatRoomContainer: React.FC<ChatRoomContainerProps> = ({
  user,
  roomId,
  membersData,
}) => {
  const [messages, setMessages] = useState<MessageState[]>([]);
  // const [previousMessages, setPreviousMessages] = useState<MessageState[]>([]);
  // const [newMessage, setNewMessage] = useState<PostMessageState | null>(null);

  const { sendMessage } = useChatSocket({
    roomId,
    onMessageReceived: (message) => {
      setMessages((prev) => [...prev, message]);
    },
  });

  // 이전 메시지 불러오기
  const fetchChatHistory = async (roomId: string) => {
    try {
      const res = await getPreviousMessages(roomId);
      setMessages(res.data);
    } catch (err) {
      console.error("fetching chat history", err);
    }
  };

  useEffect(() => {
    fetchChatHistory(roomId);
  }, [roomId]);

  const handleSendClick = (messageData: any) => {
    sendMessage(messageData);
    setMessages((prevMessages) => [...prevMessages, messageData]);
  };

  // const handleNewMessageReceived = (message: MessageState) => {
  //   setPreviousMessages((prevMessages) => [...prevMessages, message]); // 상태 업데이트 추가
  //   console.log("새로운 메세지!! New message received:", message);
  // };

  return (
    <>
      {membersData && (
        <>
          <ChatRoomHeader other={membersData.other} />
          <ChatRoom>
            <div className="chatroom-container">
              <RecevierProfile other={membersData.other} />
              <ChatContentsContainer user={user} messages={messages} />
            </div>
          </ChatRoom>
          <MessageInput
            roomId={roomId}
            other={membersData.other}
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

  .chatroom-container {
    display: flex;
    flex-direction: column;
    align-items: inherit;
    justify-content: flex-end;
    max-width: 100%;
  }
`;
