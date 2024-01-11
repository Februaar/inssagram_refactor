import Image from "next/image";
import * as SC from "@/styles/styled/create_details";
import { chevronLeft } from "@/images/index";
import { PageHeader } from "@/components/atoms/Header";
import BoardContent from "@/components/atoms/Board";
import postCreatePost from "@/services/postInfo/postCreatePost";

const DetailsPage = () => {
  const handleCreateBoard = async (
    type: "post",
    image: string[],
    fileName: string[],
    contents: string
    // location: string,
    // taggedMemberIds: string[]
  ) => {
    try {
      await postCreatePost(type, image, fileName, contents);
    } catch (err) {
      console.error("error creating new post:", err);
    }
  };

  const pageTitle = "새 게시물";

  return (
    <>
      <SC.PageHeader>
        <PageHeader title={pageTitle} />
        <SC.CreateBtn>공유하기</SC.CreateBtn>
      </SC.PageHeader>
      <SC.CreateBoard>
        <BoardContent />
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
