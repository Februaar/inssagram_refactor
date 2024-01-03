import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PostContentData } from "@/types/PostTypes";
import * as SC from "@/styles/styled/atoms_top";
import { noProfile, moreHoriz } from "@/images/index";
import DetailModal from "@/components/Modals/Detail";
import AccountInfoModal from "@/components/Modals/Account";

interface PostItemProps {
  writer: PostContentData | undefined;
}

const PostTop: React.FC<PostItemProps> = ({ writer }) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const handleDetailModalClick = () => {
    setIsDetailModalOpen(true);
  };

  const handleAccountInfoModalClick = () => {
    setIsDetailModalOpen(false);
    setIsAccountModalOpen(true);
  };

  const handleModalClose = () => {
    setIsDetailModalOpen(false);
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
          <SC.More onClick={handleDetailModalClick}>
            <Image src={moreHoriz} alt="profile" width={24} height={24} />
          </SC.More>
        </SC.Container>
      )}
      {isDetailModalOpen && (
        <DetailModal
          infoClick={handleAccountInfoModalClick}
          handleClose={handleModalClose}
        />
      )}
      {isAccountModalOpen && (
        <AccountInfoModal handleClose={handleModalClose} />
      )}
    </>
  );
};

export default PostTop;
