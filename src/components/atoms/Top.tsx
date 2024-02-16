import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import { PostContentData } from "@/types/PostTypes";
import styled from "styled-components";
import { noProfile, moreHoriz } from "@/images";
import InfoModal from "@/components/Modals/Info";
import UserInfoModal from "@/components/Modals/User";
import PostEditModal from "@/components/Modals/PostEdit";
import AccountInfoModal from "@/components/Modals/Account";

interface PostItemProps {
  writer: PostContentData;
}

const PostTop: React.FC<PostItemProps> = ({ writer }) => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const isCurrentUser = user.member_id === writer.memberId;

  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isPostEditModalOpen, setIsPostEditModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const handleInfoModal = () => {
    setIsInfoModalOpen(true);
  };

  const handleAccountInfoModal = () => {
    setIsInfoModalOpen(false);
    setIsAccountModalOpen(true);
  };

  const handlePostEditModal = () => {
    setIsInfoModalOpen(false);
    setIsPostEditModalOpen(true);
  };

  const handleModalClose = () => {
    setIsInfoModalOpen(false);
    setIsPostEditModalOpen(false);
    setIsAccountModalOpen(false);
  };

  return (
    <>
      {writer && (
        <PostTopContainer>
          <Link href={`/${writer.memberId}`}>
            <header>
              <div className="profile">
                <Image
                  src={writer.memberImage ? writer.memberImage : noProfile}
                  alt="profile"
                  width={32}
                  height={32}
                  style={{ borderRadius: "100%" }}
                />
              </div>
              <div className="id">{writer.nickName}</div>
              {isCurrentUser ? null : (
                <button
                  style={{
                    color: writer.followed ? "" : "#92a8d1",
                  }}
                >
                  {writer.followed ? "" : "팔로우"}
                </button>
              )}
            </header>
          </Link>
          <button className="more" onClick={handleInfoModal}>
            <Image src={moreHoriz} alt="profile" width={24} height={24} />
          </button>
        </PostTopContainer>
      )}
      {!isCurrentUser
        ? isInfoModalOpen && (
            <InfoModal
              post={writer}
              infoClick={handleAccountInfoModal}
              handleClose={handleModalClose}
            />
          )
        : isInfoModalOpen && (
            <UserInfoModal
              post={writer}
              infoClick={handleAccountInfoModal}
              editPostClick={handlePostEditModal}
              handleClose={handleModalClose}
            />
          )}
      {isPostEditModalOpen && (
        <PostEditModal post={writer} handleClose={handleModalClose} />
      )}
      {isAccountModalOpen && (
        <AccountInfoModal writer={writer} handleClose={handleModalClose} />
      )}
    </>
  );
};

export default PostTop;

const PostTopContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: center;
  width: 100%;
  height: 60px;

  header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 14px 4px 14px 16px;

    .profile {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
    }

    .id {
      margin-left: 12px;
    }

    button {
      margin-left: 8px;
    }
  }

  .more {
    padding: 8px;
  }
`;
