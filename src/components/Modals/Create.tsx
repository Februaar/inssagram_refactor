import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setImageURL, setFileName } from "@/redux/imageSlice";
import { UserState } from "@/types/UserTypes";
import * as SC from "@/styles/styled/modals_create";
import { createPost, createStory } from "@/images/index";
import { storage } from "../../../firebase.config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const CreateModal = () => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const [progressPercent, setProgressPercent] = useState<number>(0);

  const onImageChange = (
    e: React.ChangeEvent<EventTarget & HTMLInputElement>
  ) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    const timestamp = new Date().getTime();
    const extension = file[0].name.split(".").pop();
    const fileName = `_${timestamp}.${extension}`;

    const storageRef = ref(storage, `${user.member_id}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file[0]);
    
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
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
    <SC.Modal>
      <SC.CreateIcon>
        게시물
        <label htmlFor="post-upload" style={{ cursor: "pointer" }}>
          <Image src={createPost} alt="create-post" width={16} height={16} />
        </label>
        <input
          id="post-upload"
          type="file"
          style={{ display: "none" }}
          onChange={onImageChange}
        />
      </SC.CreateIcon>
      <SC.CreateIcon>
        스토리
        <Image src={createStory} alt="create-story" width={16} height={16} />
      </SC.CreateIcon>
      {progressPercent > 0 && progressPercent < 100 && (
        <div>Loading... {progressPercent}%</div>
      )}
    </SC.Modal>
  );
};

export default CreateModal;
