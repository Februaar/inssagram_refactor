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
          <div className="profile">
            <Image
              src={noti.sender_image ? noti.sender_image : noProfile}
              alt="profile"
              width={44}
              height={44}
              style={{ borderRadius: "100%" }}
            />
          </div>
          <span className="message">{noti.message}</span>
          {noti.post_id !== undefined ? (
            <div className="post">
              <Image
                src={noti.post_image ? noti.post_image : brokenImage}
                alt="broken-image"
                width={24}
                height={24}
              />
            </div>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 62px;
  padding: 8px 16px;

  .profile {
    margin-right: 14px;
  }

  .message {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .post {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    margin-left: 12px;
  }
`;
