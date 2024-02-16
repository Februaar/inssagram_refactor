import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import styled from "styled-components";
import { DirectPageHeader } from "@/components/atoms/Header";
import ChatListContainer from "@/components/Containers/ChatList";

const DirectInboxPage = () => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const pageTitle = user.nickname;

  return (
    <section>
      <div className="scroll-container">
        <DirectPageHeader title={pageTitle} />
        <PageTitle>메시지</PageTitle>
        <ChatListContainer />
      </div>
    </section>
  );
};

export default DirectInboxPage;

const PageTitle = styled.span`
  display: flex;
  padding: 14px 16px 10px;
  font-size: 16px;
`;
