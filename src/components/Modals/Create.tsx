import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import * as SC from "@/styles/styled/modals_create";
import { createPost, createStory } from "@/images/index";
import { uploadImage, uploadImgUrl } from "@/services/firebaseService";

const CreateModal = () => {
  const router = useRouter();
  const user: UserState = useSelector((state: RootState) => state.user);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      try {
        const imageUrl = await uploadImage(user.member_id, file);
        await uploadImgUrl(imageUrl);
        router.push("/create/details");
      } catch (err) {
        console.error("error uploading image:", err);
      }
    }
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
