import Image from "next/image";
import { useState } from "react";
import { UserState } from "@/types/UserTypes";
import styled from "styled-components";
import { noProfile } from "@/images";

interface ProfileEditItemProps {
  user: UserState;
  onImageChange: (image: File) => void;
}

const ProfileEditItem: React.FC<ProfileEditItemProps> = ({
  user,
  onImageChange,
}) => {
  // const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files && e.target.files[0];

    if (file) {
      // setImage(file);
      onImageChange(file);

      const previewURL = URL.createObjectURL(file);
      setPreviewImage(previewURL);
    }
  };

  return (
    <ItemContainer>
      <div className="item-container">
        <div className="item">
          <span className="profile-area">
            <div className="profile-image">
              <label htmlFor="image-upload">
                <Image
                  src={
                    previewImage || user.image
                      ? user.image
                      : user.profilePic
                      ? user.profilePic
                      : noProfile
                  }
                  alt="profile-image"
                  width={56}
                  height={56}
                />
              </label>
              <input
                id="image-upload"
                type="file"
                onChange={handleImageChange}
              />
            </div>
          </span>
          <Edit>
            <span className="nickname">{user.nickname}</span>
            <div className="edit-button">
              <label htmlFor="image-upload">
                <span>사진 변경</span>
              </label>
              <input
                id="image-upload"
                type="file"
                onChange={handleImageChange}
              />
            </div>
          </Edit>
        </div>
      </div>
    </ItemContainer>
  );
};

export default ProfileEditItem;

export const ItemContainer = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: stretch;
  align-self: auto;
  justify-content: flex-start;
  flex-direction: column;
  margin: 16px 0;
  overflow-y: visible;
  overflow-x: visible;

  .item-container {
    position: static;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: row;
    align-self: auto;
    align-items: stretch;
    justify-content: flex-start;
    border-radius: 20px;
    padding: 16px;
    background-color: #efefef;
    overflow-y: visible;
    overflow-x: visible;

    .item {
      position: static;
      display: flex;
      flex-grow: 1;
      flex-direction: row;
      align-self: auto;
      align-items: stretch;
      justify-content: flex-start;
      min-width: 0;
      min-height: 0;
      background-color: transparent;
      border-radius: 0;
      overflow-y: visible;
      overflow-x: visible;

      .profile-area {
        width: 56px;
        height: 56px;
        flex-shrink: 0;
        background-color: transparent;

        .profile-image {
          position: relative;
          border-radius: 50%;
          background-color: #fafafa;
          overflow: hidden;
          width: 100%;
          height: 100%;

          label {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }

          input {
            display: none;
          }
        }
      }
    }
  }
`;

export const Edit = styled.div`
  position: static;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  align-self: center;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0 16px;
  background-color: transparent;
  border-radius: 0;
  overflow-y: visible;
  overflow-x: visible;

  .nickname {
    position: relative;
    display: block;
    word-wrap: break-word;
    word-break: break-word;
    white-space: pre-line;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    min-width: 0;
    max-width: 100%;
    margin: 0;
    overflow-y: visible;
    overflow-x: visible;
    background-color: transparent;
  }

  .edit-button {
    position: relative;
    display: inline-flex;
    flex-basis: auto;
    flex-direction: row;
    align-self: flex-start;
    justify-content: center;
    width: auto;
    min-width: 0;
    height: auto;
    min-height: 0;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 14px;
    text-align: center;
    text-overflow: ellipsis;

    label {
      width: 100%;
      height: 100%;

      span {
        color: #92a8d1;
        background-color: #efefef;
        cursor: pointer;
      }
    }

    input {
      display: none;
    }
  }
`;
