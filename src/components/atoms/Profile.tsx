import Link from "next/link";
import Image from "next/image";
import { noProfile } from "@/images/index";
import * as SC from "@/styles/styled/atoms_user";
import ProfileEdit from "../Buttons/ProfileEdit"

const ProfileCard = () => {
  return (
    <>
      <SC.CardContainer>
        <SC.Profile>
          <Image src={noProfile} alt="profile-image" width={77} height={77} />
        </SC.Profile>
        <SC.EditArea>
          <SC.Id>Jinnie</SC.Id>
          <ProfileEdit />
        </SC.EditArea>
      </SC.CardContainer>
    </>
  );
};

export default ProfileCard;
