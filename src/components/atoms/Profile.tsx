import { UserPageData } from "@/types/UserTypes";
import Image from "next/image";
import { noProfile } from "@/images/index";
import * as SC from "@/styles/styled/atoms_user";
import ProfileEdit from "../Buttons/ProfileEdit";

interface ProfileCardProps {
  user: UserPageData | undefined;
  isLoggined: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, isLoggined }) => {
  return (
    <>
      {isLoggined && user ? (
        <SC.CardContainer>
          <SC.Profile>
            <Image
              src={user.profilePic ? user.profilePic : noProfile}
              alt="profile-image"
              width={77}
              height={77}
            />
          </SC.Profile>
          <SC.EditArea>
            <SC.Id>{user.nickname}</SC.Id>
            <ProfileEdit />
          </SC.EditArea>
        </SC.CardContainer>
      ) : (
        user && (
          <SC.CardContainer>
            <SC.Profile>
              <Image
                src={user.profilePic ? user.profilePic : noProfile}
                alt="profile-image"
                width={77}
                height={77}
              />
            </SC.Profile>
            <div>
              <SC.Id>{user.nickname}</SC.Id>
              <div>팔로우</div>
              <div>메세지 보내기</div>
            </div>
          </SC.CardContainer>
        )
      )}
    </>
  );
};

export default ProfileCard;
