import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setImageURL, setFileName } from "@/redux/imageSlice";
import { storage } from "../../../firebase-config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { UserState } from "@/types/UserTypes";
import styled from "styled-components";
import { createPost, createStory } from "@/images";

interface CreateModalProps {
  uploadProgress: (percent: number) => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ uploadProgress }) => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const onImageChange = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    const timestamp = new Date().getTime();
    const extension = file[0].name.split(".").pop();
    const fileName = `_${timestamp}.${extension}`;

    const storageRef = ref(storage, `/post/${user.member_id}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        uploadProgress(progress);
      },
      (error) => {
        console.error("Error during upload:", error);
        switch (error.code) {
          case "storage/canceled":
            alert("Upload has been canceled");
            break;
          default:
            alert("Error during upload. Please try again.");
        }
      },
      () => {
        e.target.value = "";
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log("file available at", downloadURL);
          dispatch(setImageURL([downloadURL]));
          dispatch(setFileName([fileName]));
          router.push("/create/details");
        });
      }
    );
  };

  return (
    <ModalContainer>
      <div className="create-icon">
        게시물
        <label
          htmlFor="post-upload"
          style={{ display: "flex", cursor: "pointer" }}
        >
          <Image src={createPost} alt="create-post" width={16} height={16} />
        </label>
        <input
          id="post-upload"
          type="file"
          style={{ display: "none" }}
          onChange={onImageChange}
        />
      </div>
      <div className="create-icon">
        스토리
        <Image src={createStory} alt="create-story" width={16} height={16} />
      </div>
    </ModalContainer>
  );
};

export default CreateModal;

const ModalContainer = styled.div`
  position: absolute;
  right: 5%;
  top: 45px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  border-radius: 6px;
  padding: 3px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  .create-icon {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-items: center;
    width: 100px;
    height: 37px;
    padding: 8px 16px;
  }
`;
