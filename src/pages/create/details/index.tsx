import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import * as SC from "@/styles/styled/create_details";
import { noProfile, brokenImage } from "@/images/index";
import { PageHeader } from "@/components/atoms/Header";

const DetailsPage = () => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const file: any = useSelector((state: RootState) => state.file);

  const pageTitle = "새 게시물";
  const [isBlurVisible, setIsBlurVisible] = useState(false);

  const handleFocus = () => {
    setIsBlurVisible(true);
  };

  const handleBlur = () => {
    setIsBlurVisible(false);
  };

  return (
    <>
      <SC.PageHeader>
        <PageHeader title={pageTitle} />
        <SC.CreateBtn>공유하기</SC.CreateBtn>
      </SC.PageHeader>
      <SC.CreateBoard>
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
              aria-label="문구를 입력하세요..."
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </SC.BoardContent>
          <SC.BoardImg>
            <Image
              src={file ? file : brokenImage}
              alt="profile"
              width={18}
              height={18}
            />
          </SC.BoardImg>
        </SC.NewBoardArea>
        <SC.Blur style={{ display: isBlurVisible ? "block" : "none" }} />
        <SC.Additional>위치 추가</SC.Additional>
        <SC.Additional>사람 태그</SC.Additional>
      </SC.CreateBoard>
    </>
  );
};

export default DetailsPage;
