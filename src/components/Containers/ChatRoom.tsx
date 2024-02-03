import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import styled from "styled-components";
import { UserState } from "@/types/ChatRoomTypes";
import ChatRoomHeader from "@/components/atoms/ChatHeader";
import RecevierProfile from "@/components/atoms/Receiver";
import DirectItem from "@/components/Items/Direct";
import DirectInput from "@/components/Inputs/Direct";
import getChatRoomData from "@/services/directInfo/getChatRoomData";

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

  const fetchChatRoomData = async (roomId: string) => {
    try {
      const res = await getChatRoomData(roomId);
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

  useEffect(() => {
    fetchChatRoomData(roomId);
  }, [roomId]);

  return (
    <>
      {chatRoom && (
        <>
          <ChatRoomHeader receiver={chatRoom.receiver} />
          <ChatRoom>
            <div className="container">
              <RecevierProfile receiver={chatRoom.receiver} />
              <DirectItem />
            </div>
          </ChatRoom>
          <DirectInput />
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
