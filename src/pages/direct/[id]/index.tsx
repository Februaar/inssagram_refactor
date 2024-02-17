import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import styled from "styled-components";
import { UserState } from "@/types/ChatRoomTypes";
import ChatRoomContainer from "@/components/Containers/ChatRoom";
import getChatRoomMembersData from "@/services/directInfo/getChatRoomMembersData";

const ChatRoomPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [membersData, setMembersData] = useState<{
    sender: UserState;
    receiver: UserState;
  } | null>(null);

  // 채팅방 유저들 데이터
  const fetchChatRoomMembersData = useCallback(
    async (id: string) => {
      try {
        const res = await getChatRoomMembersData(id);
        const memberList = res.memberList;
        const currentMemberId = user?.member_id;
        const otherMemberId = Object.keys(memberList).find(
          (memberId) => Number(memberId) !== Number(currentMemberId)
        );

        if (currentMemberId && otherMemberId) {
          const senderId = currentMemberId;
          const receiverId = otherMemberId;
          const sender = memberList[senderId];
          const receiver = memberList[receiverId];

          setMembersData({
            sender: sender,
            receiver: receiver,
          });
        }
      } catch (err) {
        console.error("fetching chat room member's data", err);
      }
    },
    [user?.member_id]
  );

  useEffect(() => {
    fetchChatRoomMembersData(id);
  }, [fetchChatRoomMembersData, id]);

  return (
    <section>
      <PageContainer>
        <ChatRoomContainer user={user} roomId={id} membersData={membersData} />
      </PageContainer>
    </section>
  );
};

export default ChatRoomPage;

const PageContainer = styled.div`
  position: relative;
  flex-shrink: 1;
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 0;
`;
