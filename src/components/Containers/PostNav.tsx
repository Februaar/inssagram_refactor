import Image from "next/image";
import * as SC from "@/styles/styled/containers_postnav";
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
      <SC.Container>
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
      </SC.Container>
    </>
  );
};

export default PostNavigation;
