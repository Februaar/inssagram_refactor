import { UserPageData } from "@/types/UserTypes";
import Image from "next/image";
import { noProfile } from "@/images/index";
import * as SC from "@/styles/styled/atoms_user";
import ProfileEdit from "../Buttons/ProfileEdit";

interface ProfileCardProps {
  user: UserPageData | undefined;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <>
      {user ? (
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
        ""
      )}
    </>
  );
};

export default ProfileCard;
