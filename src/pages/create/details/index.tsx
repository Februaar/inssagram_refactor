import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { ref, uploadBytes, getStorage, getDownloadURL } from "firebase/storage";
import { RootState } from "@/redux/store";
import { selectFiles, setImageURL } from "@/redux/imageSlice";
import { UserState } from "@/types/UserTypes";
import postCreatePost from "@/services/postInfo/postCreatePost";

import { PageHeader } from "@/components/atoms/Header";
import BoardContent from "@/components/atoms/BoardContent";
import Image from "next/image";
import { chevronLeft } from "@/images";
import styled from "styled-components";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user: UserState = useSelector((state: RootState) => state.user);
  const imageFiles = useSelector(selectFiles);
  const [contents, setContents] = useState<string | null>("");

  const handleUploadImage = async (file: File) => {
    try {
      const storage = getStorage();
      const uniqueFileName = `${Date.now()}-${file.name}`;
      const storageRef = ref(storage, `posts/${uniqueFileName}`);

      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      return { fileName: file.name, url: downloadURL };
    } catch (error) {
      console.error(`업로드 실패: ${file.name}`, error);
      return null;
    }
  };

  const handleCreateBoard = async () => {
    if (!imageFiles || imageFiles.length === 0) {
      alert("이미지를 업로드 해주세요!");
      return;
    }

    try {
      // 모든 이미지 Firebase Storage에 업로드 후 URL & 파일명명 변환
      const uploadedImages = await Promise.all(
        (imageFiles ?? []).map(
          async (file: File) => await handleUploadImage(file)
        )
      );

      const imageURLs = uploadedImages.map((img: any) => img.url);
      const fileNames = uploadedImages.map((img: any) => img.fileName);

      // Redux 상태 업데이트 (불필요한 다운로드 로직 제거)
      dispatch(setImageURL(imageURLs));

      // 서버에 게시글 정보 전송
      await postCreatePost("post", imageURLs, fileNames, contents);
      // 메인 페이지로 이동
      router.push("/main");
    } catch (error) {
      alert("게시글 생성 중 오류 발생:");
    }
  };

  return (
    <section>
      <div>
        <PageHeader title="새 게시물" />
        <CreateBtn onClick={handleCreateBoard}>공유하기</CreateBtn>
      </div>
      <CreatePost>
        <BoardContent
          userProfile={user.image}
          selectedImage={imageFiles}
          onChange={setContents}
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
