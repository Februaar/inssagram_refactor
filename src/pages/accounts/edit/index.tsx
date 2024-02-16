import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import { storage } from "../../../../firebase-config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import styled from "styled-components";
import { PageHeader } from "@/components/atoms/Header";
import EditInput from "@/components/Inputs/Edit";
import ProfileEditItem from "@/components/Items/Profile";
import Footer from "@/components/Footer";

const AccountsEditPage = () => {
  const pageTitle = "프로필 편집";
  const user: UserState = useSelector((state: RootState) => state.user);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // useEffect(() => {
  //   if (user.image) {
  //     setSelectedImage(null);
  //   }
  // }, [user.image]);

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
      } catch (error: any) {
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

    return "";
  };

  return (
    <section>
      <PageHeader title={pageTitle} />
      <AccountEditContainer>
        <div className="edit-container">
          <div className="edit-item">
            <ProfileEditItem user={user} onImageChange={onImageChange} />
            <EditInput user={user} onImageUpload={handleImageUpload} />
          </div>
        </div>
      </AccountEditContainer>
      <Footer />
    </section>
  );
};

export default AccountsEditPage;

const AccountEditContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  .edit-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 0;
    min-height: 0;
    overflow-y: visible;
    overflow-x: visible;

    .edit-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 12px;
      overflow-y: visible;
      overflow-x: visible;
    }
  }
`;
