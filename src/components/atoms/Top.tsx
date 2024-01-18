import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import { PostContentData } from "@/types/PostTypes";
import * as SC from "@/styles/styled/atoms_top";
import { noProfile, moreHoriz } from "@/images/index";
import InfoModal from "@/components/Modals/Info";
import UserInfoModal from "@/components/Modals/User";
import PostEditModal from "@/components/Modals/PostEdit";
import AccountInfoModal from "@/components/Modals/Account";

interface PostItemProps {
  writer: PostContentData;
}

const PostTop: React.FC<PostItemProps> = ({ writer }) => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const isCurrentUser = user.member_id === writer.memberId.toString();

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
        <SC.Container>
          <Link href={`/${writer.memberId}`}>
            <SC.Account>
              <SC.Profile>
                <Image
                  src={writer.memberImage ? writer.memberImage : noProfile}
                  alt="profile"
                  width={32}
                  height={32}
                />
              </SC.Profile>
              <SC.Id>{writer.nickName}</SC.Id>
            </SC.Account>
          </Link>
          <SC.More onClick={handleInfoModal}>
            <Image src={moreHoriz} alt="profile" width={24} height={24} />
          </SC.More>
        </SC.Container>
      )}
      {!isCurrentUser
        ? isInfoModalOpen && (
            <InfoModal
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
      {isPostEditModalOpen && <PostEditModal handleClose={handleModalClose} />}
      {isAccountModalOpen && (
        <AccountInfoModal writer={writer} handleClose={handleModalClose} />
      )}
    </>
  );
};

export default PostTop;
