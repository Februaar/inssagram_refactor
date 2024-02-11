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
import getReceivedMessages from "@/services/directInfo/getReceivedMessages";
import WebSocketHandler from "@/handlers/WebSocketHandler";

interface ChatRoomContainerProps {
  user: any;
  roomId: any;
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
  // const accessToken = sessionStorage.getItem("token");
  const [receivedMessages, setReceivedMessages] = useState<MessageState[]>();
  const [newMessage, setNewMessage] = useState<PostMessageState | null>(null);

  const fetchChatHistory = async (roomId: string) => {
    try {
      const res = await getReceivedMessages(roomId);
      setReceivedMessages(res.data);
    } catch (err) {
      console.error("fetching chat history", err);
    }
  };

  const handleSendMessage = (newMessageData: PostMessageState) => {};

  const handleSendClick = (newMessageData: PostMessageState) => {
    handleSendMessage(newMessageData);
    setNewMessage(newMessageData);
    console.log("sended new message:", newMessageData);
  };

  useEffect(() => {
    fetchChatHistory(roomId);
  }, [roomId]);

  return (
    <>
      {membersData && receivedMessages && (
        <>
          <ChatRoomHeader receiver={membersData.receiver} />
          <ChatRoom>
            <div className="container">
              <RecevierProfile receiver={membersData.receiver} />
              <ChatContentsContainer
                user={user}
                messages={receivedMessages}
                newMessage={newMessage}
              />
            </div>
          </ChatRoom>
          <MessageInput
            roomId={roomId}
            receiver={membersData.receiver}
            onClick={handleSendClick}
          />
        </>
      )}
      {/* <WebSocketHandler
        accessToken={accessToken}
        roomId={roomId}
        onMessageReceived={(message: PostMessageState) => setNewMessage(message)}
      /> */}
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
