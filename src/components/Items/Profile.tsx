import Image from "next/image";
import { useState } from "react";
import { UserState } from "@/types/UserTypes";
import * as SC from "@/styles/styled/items_profile";
import { noProfile } from "@/images/index";

interface ProfileEditItemProps {
  user: UserState;
  onImageChange: (image: File) => void;
}

const ProfileEditItem: React.FC<ProfileEditItemProps> = ({
  user,
  onImageChange,
}) => {
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files && e.target.files[0];

    if (file) {
      setImage(file);
      onImageChange(file);

      const previewURL = URL.createObjectURL(file);
      setPreviewImage(previewURL);
    }
  };

  return (
    <SC.ItemContainer>
      <SC.EditItem>
        <SC.EditArea>
          <SC.Profile>
            <SC.ProfileImg>
              <label
                htmlFor="image-upload"
                style={{ width: "100%", height: "100%", cursor: "pointer" }}
              >
                <Image
                  src={previewImage || user.image || noProfile}
                  alt="profile-image"
                  width={56}
                  height={56}
                />
              </label>
              <input
                id="image-upload"
                type="file"
                // accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </SC.ProfileImg>
          </SC.Profile>
          <SC.Edit>
            <SC.Nickname>{user.nickname}</SC.Nickname>
            <SC.EditBtn>
              <label
                htmlFor="image-upload"
                style={{ width: "100%", height: "100%" }}
              >
                <span
                  style={{
                    color: "#0095f6",
                    backgroundColor: "#efefef",
                    cursor: "pointer",
                  }}
                >
                  사진 변경
                </span>
              </label>
              <input
                id="image-upload"
                type="file"
                // accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </SC.EditBtn>
          </SC.Edit>
        </SC.EditArea>
      </SC.EditItem>
    </SC.ItemContainer>
  );
};

export default ProfileEditItem;
