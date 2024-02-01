import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { plus, favorite } from "@/images/index";
import styled from "styled-components";
import ProgressBar from "@/components/atoms/ProgressBar";
import CreateModal from "@/components/Modals/Create";
import NotiBubble from "@/components/Items/Bubble";

const Header = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  const createBoards = () => {
    setIsCreating(!isCreating);
  };

  const uploadProgress = (percent: number) => {
    setProgressPercent(percent);
  };

  return (
    <>
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
            <NotiBubble />
          </div>
          {isCreating ? <CreateModal uploadProgress={uploadProgress} /> : null}
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .header {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1.5px solid #dbdbdb;
    width: 375px;
    height: 44px;
    padding: 0 16px;
    z-index: 5;
  }

  .icons {
    display: flex;
    gap: 10px;
    width: 58px;
    height: 24px;
  }
`;
