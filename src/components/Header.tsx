import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import { plus, favorite } from "@/images";
import styled from "styled-components";
import ProgressBar from "@/components/atoms/ProgressBar";
import CreateModal from "@/components/Modals/Create";
import NotiBubble from "@/components/Items/Bubble";
import { createEventSource } from "@/handlers/SSEHandlers";

const Header = () => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const [isCreating, setIsCreating] = useState(false);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [unreadCount, setUnreadCount] = useState<number>(0);

  const createBoards = () => {
    setIsCreating(!isCreating);
  };

  const uploadProgress = (percent: number) => {
    setProgressPercent(percent);
  };

  useEffect(() => {
    const eventSource = createEventSource(user?.member_id, (alarmData: any) => {
      console.log("SSEHandler is " + alarmData.message);
      console.log("new alarm: " + alarmData.unreadCount);

      if (alarmData.unreadCount !== undefined) {
        setUnreadCount(alarmData.unreadCount);
      }
    });
    return () => {
      eventSource.close();
    };
  }, [user?.member_id]);

  return (
    <HeaderContainer>
      <ProgressBar percent={progressPercent} />
      <div className="header">
        <Link href="/main">
          <h1 className="logo">Inssagram</h1>
        </Link>
        <div className="icons">
          <button onClick={createBoards}>
            <Image src={plus} alt="create-boards" />
          </button>
          <Link href="/notifications">
            <button>
              <Image src={favorite} alt="notifications-page" />
            </button>
          </Link>
          {unreadCount > 0 && <span className="bubble" />}
          <NotiBubble count={unreadCount} />
        </div>
        {isCreating ? <CreateModal uploadProgress={uploadProgress} /> : null}
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 62px;
  width: 380px;
  height: 44px;
  border-bottom: 1.5px solid #dbdbdb;
  z-index: 5;

  .header {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 16px;
  }

  .icons {
    display: flex;
    gap: 10px;
    width: 58px;
    height: 24px;

    .bubble {
      position: absolute;
      top: 10px;
      right: 15px;
      width: 10px;
      height: 10px;
      border: 1.5px solid #ffffff;
      border-radius: 50%;
      background-color: #92a8d1;
    }
  }
`;
