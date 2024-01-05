import Image from "next/image";
import { bookmark, bookmarkFull } from "@/images/index";
import * as SC from "@/styles/styled/containers_icon_container";

interface SaveIconProps {
  onClick: () => void;
  isSaved: boolean;
}

const SaveIcon: React.FC<SaveIconProps> = ({ onClick, isSaved }) => {
  return (
    <>
      <SC.SaveIcon onClick={onClick}>
        <Image
          src={isSaved ? bookmarkFull : bookmark}
          alt="profile"
          width={24}
          height={24}
        />
      </SC.SaveIcon>
    </>
  );
};

export default SaveIcon;
