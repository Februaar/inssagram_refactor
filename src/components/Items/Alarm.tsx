import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setAlarms, removeAlarm } from "@/redux//alarmSlice";
import { UserState } from "@/types/UserTypes";
import { NotificationData } from "@/types/NotificationTypes";
import styled from "styled-components";
import { noProfile, brokenImage, moreHoriz } from "@/images";
import Error from "../atoms/Error";
import FollowButton from "../Buttons/Follow";
import DeleteModal from "@/components/Modals/Delete";
import postUserFollow from "@/services/userInfo/postUserFollow";
import deleteNoti from "@/services/notificationInfo/deleteNoti";

interface AlarmItemProps {
  alarm: NotificationData;
}

const AlarmItem: React.FC<AlarmItemProps> = ({ alarm }) => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const isCurrentUser = user.member_id === alarm.sender_id;

  const dispatch = useDispatch();
  const [isFriend, setIsFriend] = useState<boolean>(
    alarm.friend_status === true
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFollowClick = async (memberId: string) => {
    if (isCurrentUser) {
      alert("자신을 팔로우할 수 없습니다");
      return;
    }
    try {
      await postUserFollow(memberId);
      setIsFriend(!isFriend);
    } catch (err) {
      console.error("error following member:", err);
    }
  };

  const handleDeleteNoti = async (id: any) => {
    try {
      await deleteNoti(id);
      dispatch(removeAlarm(id));
      setIsModalOpen(false);
    } catch (err) {
      console.error("error deleting comment");
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {alarm ? (
        <ItemContainer>
          <div className="item-container">
            <div className="profile">
              <Image
                src={alarm.sender_image ? alarm.sender_image : noProfile}
                alt="profile"
                width={44}
                height={44}
                style={{ borderRadius: "100%" }}
              />
            </div>
            <span className="message">{alarm.message}</span>
            {alarm.post_id === undefined ? (
              <FollowButton
                onClick={() => handleFollowClick(alarm.sender_id)}
                status={isFriend}
              />
            ) : (
              <div className="post">
                <Image
                  src={alarm.post_image ? alarm.post_image : brokenImage}
                  alt="post-image"
                  width={44}
                  height={44}
                />
              </div>
            )}
            <div onClick={handleOpenModal} className="modal-button">
              <Image
                src={moreHoriz}
                alt="delete-button"
                width={18}
                height={18}
              />
            </div>
            {isModalOpen ? (
              <DeleteModal
                onDelete={() => handleDeleteNoti(alarm.id)}
                handleClose={handleCloseModal}
              />
            ) : null}
          </div>
        </ItemContainer>
      ) : (
        <Error message="조회할 알림이 없습니다" />
      )}
    </>
  );
};

export default AlarmItem;

const ItemContainer = styled.div`
  .item-container {
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

    .modal-button {
      display: none;
      margin-left: 3px;
      cursor: pointer;
    }
  }

  .item-container:hover .modal-button {
    display: inline;
  }
`;
