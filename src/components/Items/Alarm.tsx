import { useState } from "react";
import Image from "next/image";
import { NotificationData } from "@/types/NotificationTypes";
import styled from "styled-components";
import { noProfile, brokenImage, moreHoriz } from "@/images";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import Error from "../atoms/Error";
import FollowButton from "../Buttons/Follow";
import DeleteModal from "@/components/Modals/Delete";
import postUserFollow from "@/services/userInfo/postUserFollow";
import deleteNoti from "@/services/notificationInfo/deleteNoti";

interface AlarmItemProps {
  noti: NotificationData;
}

const AlarmItem: React.FC<AlarmItemProps> = ({ noti }) => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const isCurrentUser = user.member_id === noti.sender_id;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFollowClick = async (memberId: string) => {
    if (isCurrentUser) {
      alert("자신을 팔로우할 수 없습니다");
      return;
    }

    try {
      await postUserFollow(memberId);
    } catch (err) {
      console.error("error following member:", err);
    }
  };

  const handleDeleteNoti = async (id: string) => {
    try {
      await deleteNoti(id);
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
      {noti ? (
        <ItemContainer>
          <div className="item-container">
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
            {noti.post_id === undefined ? (
              <FollowButton
                onClick={() => handleFollowClick(noti.sender_id)}
                status={noti.friend_status}
              />
            ) : (
              <div className="post">
                <Image
                  src={noti.post_image ? noti.post_image : brokenImage}
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
                onDelete={() => handleDeleteNoti(noti.id)}
                handleClose={handleCloseModal}
              />
            ) : null}
          </div>
        </ItemContainer>
      ) : (
        <Error message="조회하실 알림이 없습니다" />
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
