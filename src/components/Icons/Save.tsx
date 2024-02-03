import Image from "next/image";
import { bookmark, bookmarkFull } from "@/images";
import styled from "styled-components";

interface SaveIconProps {
  onClick: () => void;
  isSaved: boolean;
}

const SaveIcon: React.FC<SaveIconProps> = ({ onClick, isSaved }) => {
  return (
    <>
      <Icon onClick={onClick}>
        <Image
          src={isSaved ? bookmarkFull : bookmark}
          alt="profile"
          width={24}
          height={24}
        />
      </Icon>
    </>
  );
};

export default SaveIcon;

const Icon = styled.span`
  padding: 8px;
  margin: 0;
  margin-left: auto;
  cursor: pointer;
`;
