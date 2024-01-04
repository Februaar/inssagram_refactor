import Image from "next/image";
import { NotificationData } from "@/types/NotificationTypes";
import styled from "styled-components";
import { noProfile, brokenImage } from "@/images/index";
import Error from "../atoms/Error";
import FollowButton from "../Buttons/Follow";

interface AlarmItemProps {
  noti: NotificationData | undefined;
}

const AlarmItem: React.FC<AlarmItemProps> = ({ noti }) => {
  return (
    <>
      {noti ? (
        <ItemContainer>
          <Account>
            <Image
              src={noti.sender_image ? noti.sender_image : noProfile}
              alt="profile"
              width={44}
              height={44}
              style={{ borderRadius: "100%" }}
            />
          </Account>
          <Message>{noti.message}</Message>
          {noti.post_id !== undefined ? (
            <Post>
              <Image
                src={noti.post_image ? noti.post_image : brokenImage}
                alt="broken-image"
                width={24}
                height={24}
              /> 
            </Post>
          ) : (
            <FollowButton />
          )}
        </ItemContainer>
      ) : (
        <Error message="조회하실 알림이 없습니다" />
      )}
    </>
  );
};

export default AlarmItem;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  padding: 8px 16px;
`;

const Account = styled.div`
  width: 44px;
  margin-right: 14px;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  min-width: 240px;
`;

const Post = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  margin-left: 14px;
`;
