import Link from "next/link";
import Image from "next/image";
import { LikedPostMemberData } from "@/types/UserTypes";
import { noProfile } from "@/images";
import styled from "styled-components";
import FollowButton from "@/components/Buttons/Follow";

interface StatusItemProps {
  member: LikedPostMemberData;
}

const StatusItem: React.FC<StatusItemProps> = ({ member }) => {
  return (
    <>
      <ItemContainer key={member.memberId}>
        <Link href={`/${member.memberId}`} passHref>
          <Image
            className="profile"
            src={member.memberProfile ? member.memberProfile : noProfile}
            alt="프로필 이미지"
            width={44}
            height={44}
          />
        </Link>
        <div className="account-area">
          <div className="account">
            <span>{member.memberNickname}</span>
          </div>
        </div>
        <FollowButton />
      </ItemContainer>
    </>
  );
};

export default StatusItem;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 62px;
  padding: 8px 16px;

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 100%;
    margin-right: 12px;
    overflow: hidden;
  }

  .account-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    .account {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
