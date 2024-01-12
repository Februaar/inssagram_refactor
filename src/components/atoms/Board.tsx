import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import { CreateBoardData } from "@/types/PostTypes";
import * as SC from "@/styles/styled/create_details";
import { noProfile, brokenImage } from "@/images/index";

interface BoardContentsProps {
  files: string[] | undefined;
  onChange: (contents: string) => void;
}

const BoardContent: React.FC<BoardContentsProps> = ({ onChange, files }) => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const [isBlurVisible, setIsBlurVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    onChange(newText);
  };

  const handleFocus = () => {
    setIsBlurVisible(true);
  };

  const handleBlur = () => {
    setIsBlurVisible(false);
  };

  return (
    <>
      <SC.NewBoardArea>
        <SC.ProfileImg>
          <Image
            src={user.image ? user.image : noProfile}
            alt="profile"
            width={30}
            height={30}
          />
        </SC.ProfileImg>
        <SC.BoardContent>
          <SC.TextArea
            placeholder="내용을 입력하세요..."
            aria-label="문구를 입력하세요..."
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </SC.BoardContent>
        <SC.BoardImg>
          <Image
            src={files ? files : brokenImage}
            alt="profile"
            width={18}
            height={18}
          />
        </SC.BoardImg>
      </SC.NewBoardArea>
      <SC.Blur style={{ display: isBlurVisible ? "block" : "none" }} />
    </>
  );
};

export default BoardContent;
