import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import { storage } from "../../../../firebase-config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import * as SC from "@/styles/styled/accounts_edit";
import { PageHeader } from "@/components/atoms/Header";
import EditInput from "@/components/Inputs/Edit";
import ProfileEditItem from "@/components/Items/Profile";
import Footer from "@/components/Footer";

const AccountsEditPage = () => {
  const pageTitle = "프로필 편집";
  const user: UserState = useSelector((state: RootState) => state.user);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const onImageChange = (image: File) => {
    setSelectedImage(image);
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      const timestamp = new Date().getTime();
      const extension = selectedImage.name.split(".").pop();
      const fileName = `profile_${timestamp}.${extension}`;

      const storageRef = ref(storage, `/profile/${user.member_id}/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedImage);

      try {
        await uploadTask;

        const downloadURL = await getDownloadURL(storageRef);
        console.log("file available at", downloadURL);

        return downloadURL;
      } catch (error) {
        console.error("Error during upload:", error);
        switch (error.code) {
          case "storage/canceled":
            alert("Upload has been canceled");
            break;
          default:
            alert("Error during upload. Please try again.");
        }
      }
    }
  };

  return (
    <section>
      <PageHeader title={pageTitle} />
      <SC.Main>
        <SC.PageContainer>
          <SC.ContentArea>
            <ProfileEditItem user={user} onImageChange={onImageChange} />
            <EditInput user={user} onImageUpload={handleImageUpload} />
          </SC.ContentArea>
        </SC.PageContainer>
      </SC.Main>
      <Footer />
    </section>
  );
};

export default AccountsEditPage;
