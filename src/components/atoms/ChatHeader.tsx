import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { UserState } from "@/types/ChatRoomTypes";
import { noProfile, arrowBack } from "@/images";
import styled from "styled-components";

interface ChatRoomHeaderProps {
  receiver: UserState;
}

const ChatRoomHeader: React.FC<ChatRoomHeaderProps> = ({ receiver }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <RoomHeader>
      <div className="back-icon">
        <div role="button" className="back-btn" onClick={goBack}>
          <Image src={arrowBack} alt="prev-page" width={24} height={24} />
        </div>
      </div>
      <div className="account">
        <div className="profile">
          <Link href={`/${receiver.memberId}`}>
            <Image
              src={receiver.memberProfile ? receiver.memberProfile : noProfile}
              alt="프로필"
              width={24}
              height={24}
              object-fit="cover"
              style={{ borderRadius: "100%" }}
            />
          </Link>
        </div>
        <div className="details">
          <Link href={`/${receiver.memberId}`}>
            <span className="nickname">{receiver.memberNickname}</span>
          </Link>
          {/* <span className="recent-time">1시간 전에 활동</span> */}
        </div>
      </div>
    </RoomHeader>
  );
};

export default ChatRoomHeader;

const RoomHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  min-height: 44px;
  padding: 0 16px;
  border-bottom: 1px solid #dbdbdb;

  .back-icon {
    display: flex;

    .back-btn {
      display: flex;
      align-items: center;
      margin-right: 12px;
      cursor: pointer;
    }
  }

  .account {
    position: relative;
    display: flex;
    flex-shrink: 1;
    flex-grow: 1;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    min-width: 0;
    margin: -6px;

    .profile {
      padding: 6px;
      max-width: 100%;
    }

    .details {
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
      max-width: 100%;
      padding: 6px;

      .nickname {
        font-size: 16px;
      }

      .recent-time {
        color: #737373;
        font-size: 12px;
        font-weight: 400;
        margin-top: 2px;
      }
    }
  }
`;
