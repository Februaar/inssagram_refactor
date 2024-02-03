import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { noProfile, brokenImage } from "@/images";

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
      <ContentArea>
        <span className="profile">
          <Image
            src={userProfile ? userProfile : noProfile}
            alt="profile"
            width={30}
            height={30}
          />
        </span>
        <div className="content">
          <textarea
            className="text-area"
            placeholder="내용을 입력하세요..."
            aria-label="문구를 입력하세요..."
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className="post">
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
        </div>
      </ContentArea>
      <Blur style={{ display: isBlurVisible ? "block" : "none" }} />
    </>
  );
};

export default BoardContent;

const ContentArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  vertical-align: baseline;
  padding: 16px;
  border-bottom: 1px solid #dbdbdb;

  .profile {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 6px;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .content {
    flex-grow: 1;
    flex-shrink: 1;
    // width: 315px;
    overflow: hidden;

    .text-area {
      width: 95%;
      height: 45px;
      overflow-x: auto;
      overflow-y: auto;
      overflow-wrap: break-word;
      padding: 3px;
    }
  }

  .post {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
  }
`;

const Blur = styled.div`
  position: absolute;
  top: 124px;
  width: 100%;
  height: 90%;
  background-color: rgb(0 0 0 / 50%);
  border-bottom-right-radius: 44px;
  border-bottom-left-radius: 44px;
  z-index: 10;
`;
