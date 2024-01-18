import Image from "next/image";
import * as SC from "@/styles/styled/containers_icon_container";
import { favorite, favoriteFull } from "@/images/index";

interface FavoriteIconProps {
  onClick: () => void;
  isLiked: boolean;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ onClick, isLiked }) => {
  return (
    <>
      <SC.Icon onClick={onClick}>
        <Image
          src={isLiked ? favoriteFull : favorite}
          alt="profile"
          width={12}
          height={12}
        />
      </SC.Icon>
    </>
  );
};

export default FavoriteIcon;
