import Image from "next/image";
import styled from "styled-components";
import { noProfile, close } from "@/images/index";

const HistoryItem = () => {
  return (
    <>
      <ItemContainer>
        <Profile>
          <Image
            src={noProfile}
            alt="profile"
            width={44}
            height={44}
            style={{ borderRadius: "100%" }}
          />
        </Profile>
        <HistoryArea>
          <HistoryInfo>
            <Account>Jinnie</Account>
            <Job>개발자 · 팔로잉</Job>
          </HistoryInfo>
          <DeleteBtn>
            <Image src={close} alt="delete-button" width={18} height={18} />
          </DeleteBtn>
        </HistoryArea>
      </ItemContainer>
    </>
  );
};

export default HistoryItem;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  padding: 8px 16px;
`;

const Profile = styled.div`
  width: 44px;
  margin-right: 14px;
`;

const HistoryArea = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;
`;

const HistoryInfo = styled.div``;

const Account = styled.p``;

const Job = styled.span`
  color: #737373;
  font-size: 12px;
`;

const DeleteBtn = styled.button`
  margin-right: 8px;
`;
