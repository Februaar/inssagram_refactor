import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { noProfile } from "@/images";
import { RecommendationsData } from "@/types/UserTypes";

interface RecommendItemProps {
  account: RecommendationsData;
}

const RecommendItem: React.FC<RecommendItemProps> = ({ account }) => {
  return (
    <Link href={`/${account.member_id}`}>
      <ItemContainer>
        <div className="profile-img">
          <Image
            src={account.image ? account.image : noProfile}
            alt="profile"
            width={44}
            height={44}
            style={{ borderRadius: "100%" }}
          />
        </div>
        <div className="account-area">
          <p>{account.nickname}</p>
          <span>{account.job}</span>
        </div>
      </ItemContainer>
    </Link>
  );
};

export default RecommendItem;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  padding: 8px 16px;

  .profile-img {
    width: 44px;
    margin-right: 14px;
  }

  .account-area {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 3px;

    span {
      color: #92a8d1;
      font-size: 12px;
    }
  }
`;
