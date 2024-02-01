import Image from "next/image";
import styled from "styled-components";
import { gridView, calendarView, bookmark, tagged } from "@/images/index";

interface PostNavProps {
  isLoggined: boolean;
  onIconClick: (iconName: string) => void;
}

const PostNavigation: React.FC<PostNavProps> = ({
  isLoggined,
  onIconClick,
}) => {
  const handleIconClick = (iconName: string) => {
    onIconClick(iconName);
  };

  return (
    <>
      <NavContainer>
        <Image
          src={gridView}
          alt="grid-view"
          width={24}
          height={24}
          onClick={() => handleIconClick("grid")}
        />
        <Image
          src={calendarView}
          alt="calendar-view"
          width={24}
          height={24}
          onClick={() => handleIconClick("calendar")}
        />
        {isLoggined && (
          <Image
            src={bookmark}
            alt="bookmarked-view"
            width={24}
            height={24}
            onClick={() => handleIconClick("saved")}
          />
        )}
        <Image
          src={tagged}
          alt="tagged-view"
          width={24}
          height={24}
          onClick={() => handleIconClick("tagged")}
        />
      </NavContainer>
    </>
  );
};

export default PostNavigation;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 45px;
  padding: 12px 0;
  border-top: 1px solid #dbdbdb;

  & > * {
    cursor: pointer;
  }
`;
