import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { logoutUser } from "@/redux/userSlice";
import { UserState } from "@/types/UserTypes";
import styled from "styled-components";
import { home, search, direct, film, noProfile } from "@/images";
import LogoutModal from "@/components/Modals/Logout";

const Footer = () => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignout = () => {
    dispatch(logoutUser());
    setIsModalOpen(false);
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
          <span>
            <Link href="/main">
              <Image src={home} alt="home" width={24} height={24} />
            </Link>
          </span>
          <span>
            <Link href="/explore">
              <Image src={search} alt="explore" width={24} height={24} />
            </Link>
          </span>
          <span>
            <p onClick={handleModalOpen}>💎</p>
          </span>
          <span>
            <Link href="/direct/inbox">
              <Image src={direct} alt="direct-new" width={24} height={24} />
            </Link>
          </span>
          <span>
            <Link href={`/${user.member_id}`}>
              <Image
                src={user.image ? user.image : noProfile}
                alt="user-page"
                width={24}
                height={24}
                style={{ borderRadius: "100%" }}
              />
            </Link>
          </span>
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
  position: relative;
  width: 100%;
  height: 100%;

  .footer {
    position: fixed;
    bottom: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 375px;
    padding: 0 16px;
    border-top: 1px solid #dbdbdb;
    border-bottom-right-radius: 44px;
    border-bottom-left-radius: 44px;
    z-index: 5;

    @media (min-width: 360px) and (max-width: 768px) {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px;
      border-bottom-right-radius: 18px;
      border-bottom-left-radius: 18px;

      p {
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
`;
