import { UserPageData } from "@/types/UserTypes";
import Image from "next/image";
import { noProfile } from "@/images";
import styled from "styled-components";
import ProfileEditButton from "../Buttons/ProfileEdit";

interface ProfileCardProps {
  user: UserPageData | undefined;
  isLoggined: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, isLoggined }) => {
  return (
    <>
      {isLoggined && user ? (
        <CardContainer>
          <div className="profile">
            <Image
              src={user.profilePic ? user.profilePic : noProfile}
              alt="profile-image"
              objectFit="cover"
              layout="auto"
              width={77}
              height={77}
              style={{ borderRadius: "100%" }}
            />
          </div>
          <div className="user-area">
            <h1>{user.nickname}</h1>
            <ProfileEditButton />
          </div>
        </CardContainer>
      ) : (
        user && (
          <CardContainer>
            <div className="profile">
              <Image
                src={user.profilePic ? user.profilePic : noProfile}
                alt="profile-image"
                objectFit="cover"
                layout="auto"
                width={77}
                height={77}
                style={{ borderRadius: "100%" }}
              />
            </div>
            <div className="user-area">
              <h1>{user.nickname}</h1>
              <div className="follow">
                <div>
                  <button>팔로우</button>
                </div>
                <div>
                  <button>메세지 보내기</button>
                </div>
              </div>
            </div>
          </CardContainer>
        )
      )}
    </>
  );
};

export default ProfileCard;

const CardContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 16px 16px 24px;

  .profile {
    display: flex;
    justify-content: center;
    margin-right: 28px;
    object-fit: cover;
    width: 77px;
    height: 77px;
  }

  .user-area {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;

    h1 {
      font-size: 20px;
      font-weight: 400;
    }

    .follow {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 5px;

      div {
        display: flex;
        justify-content: center;
        height: 32px;
        border-radius: 8px;
        background-color: #efefef;

        button {
          width: 100%;
          padding: 0 16px;
          font-size: 14px;
        }
      }
    }
  }
`;
