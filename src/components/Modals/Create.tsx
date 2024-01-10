import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setSelectedFile } from "@/redux/fileSlice";
import * as SC from "@/styles/styled/modals_create";
import { createPost, createStory } from "@/images/index";

const CreateModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [file, setFile] = useState<File | undefined>(undefined);
  const selectedFile = useSelector(
    (state: RootState) => state.file.selectedFile
  );

  useEffect(() => {
    if (selectedFile) {
      router.push("/create/details");
    }
  }, [selectedFile, router]);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile);
    dispatch(setSelectedFile(selectedFile));
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
          onChange={handleFileChange}
        />
      </SC.CreateIcon>
      <SC.CreateIcon>
        스토리
        <Image src={createStory} alt="create-story" width={16} height={16} />
      </SC.CreateIcon>
    </SC.Modal>
  );
};

export default CreateModal;
