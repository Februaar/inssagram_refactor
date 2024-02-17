import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { logoutUser } from "@/redux/userSlice";
import { UserState } from "@/types/UserTypes";
import styled from "styled-components";
import { home, search, direct, film, noProfile } from "@/images";
import LogoutModal from "@/components/Modals/Logout";
import { createEventSource } from "@/handlers/SSEHandlers";

const Footer = () => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showBubble, setShowBubble] = useState<boolean>(true);
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const eventSource = createEventSource(user?.member_id, (alarmData: any) => {
      console.log("SSEHandler is " + alarmData.message);
      console.log("new direct: " + alarmData.unreadChatCount);

      if (alarmData.unreadChatCount !== undefined) {
        setUnreadCount(alarmData.unreadChatCount);
      }
    });
    return () => {
      eventSource.close();
    };
  }, [user?.member_id]);

  useEffect(() => {
    if (unreadCount > 0) {
      setShowBubble(true);

      const timer = setTimeout(() => {
        setShowBubble(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [unreadCount]);

  const handleSignout = () => {
    dispatch(logoutUser());
    setIsModalOpen(false);
    router.push("/accounts/signin");
  };

  const handleModalOpen = () => {
    if (user.member_id) {
      setIsModalOpen(true);
    } else {
      router.push("/accounts/signin");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FooterContainer>
        <div className="footer">
          <div className="icon">
            <Link href="/main">
              <Image src={home} alt="home" width={24} height={24} />
            </Link>
          </div>
          <div className="icon">
            <Link href="/explore">
              <Image src={search} alt="explore" width={24} height={24} />
            </Link>
          </div>
          <div className="icon">
            <p onClick={handleModalOpen}>💎</p>
          </div>
          <div className="icon">
            <Link href="/direct/inbox">
              <Image src={direct} alt="direct-new" width={24} height={24} />
            </Link>
            {showBubble && unreadCount > 0 && (
              <div className="bubble">
                <span className="count">{unreadCount}</span>
              </div>
            )}
          </div>
          <div className="icon">
            <Link href={`/${user.member_id}`}>
              <Image
                src={
                  user.image
                    ? user.image
                    : user.profilePic
                    ? user.profilePic
                    : noProfile
                }
                alt="user-page"
                width={24}
                height={24}
                style={{ borderRadius: "100%" }}
              />
            </Link>
          </div>
        </div>
      </FooterContainer>
      <>
        {isModalOpen && (
          <LogoutModal
            nickname={user.nickname}
            onClick={handleSignout}
            handleClose={handleModalClose}
          />
        )}
      </>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: fixed;
  bottom: 29px;
  width: 380px;
  height: 46px;
  border-top: 1px solid #dbdbdb;
  border-bottom-right-radius: 44px;
  border-bottom-left-radius: 44px;
  z-index: 5;

  .footer {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    border-bottom-right-radius: 44px;
    border-bottom-left-radius: 44px;
    z-index: 5;

    @media (min-width: 360px) and (max-width: 768px) {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    .icon {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom-right-radius: 18px;
      border-bottom-left-radius: 18px;

      p {
        font-size: 18px;
        cursor: pointer;
      }

      .bubble {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15px;
        height: 15px;
        background-color: #92a8d1;
        border-radius: 100%;
        border: 1.5px solid #ffffff;

        .count {
          font-size: 9px;
          font-weight: 400;
          color: #ffffff;
          background-color: transparent;
        }
      }
    }
  }
`;
