import Image from "next/image";
import { useState } from "react";
import * as SC from "@/styles/styled/create_details";
import { noProfile, brokenImage } from "@/images/index";

interface BoardContentsProps {
  userProfile: string | null;
  selectedImage: string[] | null;
  onChange: (contents: string) => void;
}

const BoardContent: React.FC<BoardContentsProps> = ({
  userProfile,
  selectedImage,
  onChange,
}) => {
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
            src={userProfile ? userProfile : noProfile}
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
          {selectedImage && selectedImage.length > 0 ? (
            selectedImage.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`preview-${index}`}
                width={48}
                height={48}
              />
            ))
          ) : (
            <Image src={brokenImage} alt="error" width={18} height={18} />
          )}
        </SC.BoardImg>
      </SC.NewBoardArea>
      <SC.Blur style={{ display: isBlurVisible ? "block" : "none" }} />
    </>
  );
};

export default BoardContent;
