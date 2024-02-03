import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { selectImageURL, selectFileName } from "@/redux/imageSlice";
import { storage } from "../../../../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
import { UserState } from "@/types/UserTypes";
import postCreatePost from "@/services/postInfo/postCreatePost";
import styled from "styled-components";
import { chevronLeft } from "@/images";
import { PageHeader } from "@/components/atoms/Header";
import BoardContent from "@/components/atoms/Board";

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
    <section>
      <div>
        <PageHeader title={pageTitle} />
        <CreateBtn
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
        </CreateBtn>
      </div>
      <CreatePost>
        <BoardContent
          userProfile={user.image}
          selectedImage={downloadedImg || []}
          onChange={handleContentsChange}
        />
        <div className="additional">
          <span className="title">위치 추가</span>
          <span className="icon">
            <Image
              src={chevronLeft}
              alt=""
              style={{ transform: "rotate(180deg)" }}
              width={24}
              height={24}
            />
          </span>
        </div>
        <div className="additional">
          <span className="title">사람 태그</span>
          <span className="icon">
            <Image
              src={chevronLeft}
              alt="into-page"
              style={{ transform: "rotate(180deg)" }}
              width={24}
              height={24}
            />
          </span>
        </div>
      </CreatePost>
    </section>
  );
};

export default DetailsPage;

const CreateBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5%;
  display: flex;
  align-items: center;
  width: 35px;
  height: 35px;
  font-size: 16px;
  color: #92a8d1;
  padding: 0;
`;

const CreatePost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  vertical-align: baseline;

  .additional {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    margin-top: 12px;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;

    .title {
      font-size: 16px;
      margin-left: 16px;
    }

    .icon {
      display: inline-block;
      margin: 0 16px;
    }
  }
`;
