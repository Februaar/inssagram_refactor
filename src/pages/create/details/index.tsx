import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { selectImageURL, selectFileName } from "@/redux/imageSlice";
import { UserState } from "@/types/UserTypes";
import { storage } from "../../../../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
import * as SC from "@/styles/styled/create_details";
import { chevronLeft } from "@/images/index";
import { PageHeader } from "@/components/atoms/Header";
import BoardContent from "@/components/atoms/Board";
import postCreatePost from "@/services/postInfo/postCreatePost";

const DetailsPage = () => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const imageURL = useSelector(selectImageURL);
  const fileName = useSelector(selectFileName);

  const pageTitle = "새 게시물";
  const router = useRouter();
  const [downloadedImg, setDownloadedImg] = useState<string[] | null>(null);
  const [contents, setContents] = useState<string | null>("");

  useEffect(() => {
    // 이미지 URL이 변경될 때마다 파이어베이스에서 이미지 다운로드
    if (imageURL && imageURL.length > 0) {
      const downloadURLs: string[] = [];
      imageURL.forEach((url) => {
        const storageRef = ref(storage, url);
        getDownloadURL(storageRef)
          .then((downloadURL) => {
            downloadURLs.push(downloadURL);
            // 모든 이미지가 다운로드 되었는지 확인
            if (downloadURLs.length === imageURL.length) {
              setDownloadedImg(downloadURLs);
            }
          })
          .catch((error) => {
            console.error("Error fetching image:", error);
            setDownloadedImg(null);
          });
      });
    }
  }, [imageURL]);

  const handleCreateBoard = async (
    type: "post",
    image: string[],
    fileName: string[],
    contents: string | null
  ) => {
    try {
      await postCreatePost(type, image, fileName, contents);
      router.push("/main");
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
        <SC.CreateBtn
          onClick={() =>
            handleCreateBoard(
              "post",
              downloadedImg || [],
              fileName || [],
              contents
            )
          }
        >
          공유하기
        </SC.CreateBtn>
      </SC.PageHeader>
      <SC.CreateBoard>
        <BoardContent
          userProfile={user.image}
          selectedImage={downloadedImg || []}
          onChange={handleContentsChange}
        />
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
              alt="into-page"
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
