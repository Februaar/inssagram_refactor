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
              style={{ borderRadius: "100%" }}
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
                style={{ borderRadius: "100%" }}
              />
            </SC.Profile>
            <SC.UserArea>
              <SC.Id>{user.nickname}</SC.Id>
              <SC.Connect>
                <SC.Detail>
                  <SC.Button>팔로우</SC.Button>
                </SC.Detail>
                <SC.Detail>
                  <SC.Button>메세지 보내기</SC.Button>
                </SC.Detail>
              </SC.Connect>
            </SC.UserArea>
          </SC.CardContainer>
        )
      )}
    </>
  );
};

export default ProfileCard;
