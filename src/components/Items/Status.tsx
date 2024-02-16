import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import { LikedPostMemberData } from "@/types/UserTypes";
import styled from "styled-components";
import { noProfile } from "@/images";
import FollowButton from "@/components/Buttons/Follow";
import postUserFollow from "@/services/userInfo/postUserFollow";

interface StatusItemProps {
  member: LikedPostMemberData;
}

const StatusItem: React.FC<StatusItemProps> = ({ member }) => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const isCurrentUser = user.member_id === member.memberId;
  const [isFriend, setIsFriend] = useState<boolean>(
    member.followedState === true
  );

  const handleFollowClick = async (memberId: string) => {
    try {
      await postUserFollow(memberId);
      setIsFriend(!isFriend);
    } catch (err) {
      console.error("error following member:", err);
    }
  };

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
        {isCurrentUser ? null : (
          <FollowButton
            onClick={() => handleFollowClick(member.memberId)}
            status={isFriend}
          />
        )}
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
