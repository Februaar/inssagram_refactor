import Image from "next/image";
import { favorite, favoriteFull } from "@/images/index";
import styled from "styled-components";

interface FavoriteIconProps {
  onClick: () => void;
  isLiked: boolean;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ onClick, isLiked }) => {
  return (
    <>
      <Icon onClick={onClick}>
        <Image
          src={isLiked ? favoriteFull : favorite}
          alt="profile"
          width={24}
          height={24}
        />
      </Icon>
    </>
  );
};

export default FavoriteIcon;

const Icon = styled.span`
  padding: 8px;
  cursor: pointer;
`;
