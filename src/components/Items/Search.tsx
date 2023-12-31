import Image from "next/image";
import styled from "styled-components";
import { noProfile } from "@/images/index";

const SearchItem = () => {
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
        <ResultArea>
          <Account>Jinnie</Account>
          <Job>개발자</Job>
        </ResultArea>
      </ItemContainer>
    </>
  );
};

export default SearchItem;

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

const ResultArea = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 3px;
`;

const Account = styled.p``;

const Job = styled.span`
  color: #737373;
  font-size: 12px;
`;
