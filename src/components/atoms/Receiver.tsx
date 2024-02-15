import Link from "next/link";
import Image from "next/image";
import { UserState } from "@/types/ChatRoomTypes";
import styled from "styled-components";
import { noProfile } from "@/images";

interface ReceiverProfileProps {
  receiver: UserState;
}

const ReceiverProfile: React.FC<ReceiverProfileProps> = ({ receiver }) => {
  return (
    <ProfileContainer>
      <div className="profile-details">
        <div className="profile">
          <Image
            src={receiver.memberProfile ? receiver.memberProfile : noProfile}
            alt="프로필"
            width={56}
            height={56}
            object-fit="cover"
            style={{ borderRadius: "100%" }}
          />
        </div>
        <div className="nickname-area">
          <div className="nickname">
            <span>{receiver.memberNickname}</span>
          </div>
        </div>
        <div className="infos-area">
          <span>{receiver.memberNickname} · Inssagram</span>
        </div>
        <div role="button" className="profile-link">
          <Link href={`/${receiver.memberId}`}>프로필 보기</Link>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default ReceiverProfile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  margin: 20px 0 10px 0;
  min-width: 100%;

  .profile-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .profile {
      position: relative;
      display: block;
      padding: 16px 0;
    }

    .nickname-area {
      width: 100%;
      padding: 0 14px;

      .nickname {
        position: static;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
        overflow-y: visible;
        overflow-x: visible;

        span {
          font-size: 20px;
          font-weight: 600;
          text-align: center;
          word-wrap: break-word;
          min-width: 0;
          max-width: 100%;
          overflow-y: visible;
          overflow-x: visible;
        }
      }
    }

    .infos-area {
      position: static;
      display: flex;
      flex-shrink: 0;
      flex-grow: 0;
      flex-direction: row;
      align-items: stretch;
      justify-content: center;
      align-self: auto;
      padding-top: 12px;
      overflow-y: visible;
      overflow-x: visible;

      span {
        position: relative;
        min-width: 0;
        max-width: 100%;
        word-wrap: break-word;
        white-space: pre-line;
        color: #737373;
        overflow-y: visible;
        overflow-x: visible;
      }
    }

    .profile-link {
      padding: 24px 0 32px 0;

      a {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        width: auto;
        height: 32px;
        font-weight: 600;
        line-height: 18px;
        text-align: center;
        text-overflow: ellipsis;
        border-radius: 8px;
        background-color: #efefef;
      }
    }
  }
`;
