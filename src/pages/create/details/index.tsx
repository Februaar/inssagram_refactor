import { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CreateBoardData } from "@/types/PostTypes";
import * as SC from "@/styles/styled/create_details";
import { chevronLeft } from "@/images/index";
import { PageHeader } from "@/components/atoms/Header";
import BoardContent from "@/components/atoms/Board";
import postCreatePost from "@/services/postInfo/postCreatePost";

const DetailsPage = () => {
  const pageTitle = "새 게시물";
  const [contents, setContents] = useState("");

  const handleCreateBoard = async (
    image: string[],
    fileName: string[],
    contents: string
    // location: string,
    // taggedMemberIds: string[]
  ) => {
    try {
      await postCreatePost("post", image, fileName, contents);
    } catch (err) {
      console.error("error creating new post:", err);
    }
  };

  const handleContentsChange = (contents: string) => {
    setContents(contents);
  };

  return (
    <>
      <SC.PageHeader>
        <PageHeader title={pageTitle} />
        <SC.CreateBtn onClick={handleCreateBoard}>공유하기</SC.CreateBtn>
      </SC.PageHeader>
      <SC.CreateBoard>
        <BoardContent onChange={handleContentsChange} />
        <SC.Additional>
          <SC.Title>위치 추가</SC.Title>
          <SC.Icon>
            <Image
              src={chevronLeft}
              alt=""
              style={{ transform: "rotate(180deg)" }}
              width={24}
              height={24}
            />
          </SC.Icon>
        </SC.Additional>
        <SC.Additional>
          <SC.Title>사람 태그</SC.Title>
          <SC.Icon>
            <Image
              src={chevronLeft}
              alt=""
              style={{ transform: "rotate(180deg)" }}
              width={24}
              height={24}
            />
          </SC.Icon>
        </SC.Additional>
      </SC.CreateBoard>
    </>
  );
};

export default DetailsPage;
