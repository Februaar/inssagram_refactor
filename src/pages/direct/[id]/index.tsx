import { useRouter } from "next/router";

import styled from "styled-components";
import ChatRoomContainer from "@/components/Containers/ChatRoom";

const ChatRoomPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PageContainer>
      <ChatRoomContainer roomId={id} />
    </PageContainer>
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
