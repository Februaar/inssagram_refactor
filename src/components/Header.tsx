import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { plus, favorite } from "@/images/index";
import * as SC from "@/styles/styled/header";
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
      <ProgressBar percent={progressPercent} />
      <SC.Container>
        <Link href="/">
          <h1>Inssagram</h1>
        </Link>
        <SC.IconContainer>
          <SC.CreateIcon onClick={createBoards}>
            <Image src={plus} alt="create-boards" />
          </SC.CreateIcon>
          <Link href="/notifications">
            <SC.NotificationIcon>
              <Image src={favorite} alt="notifications-page" />
            </SC.NotificationIcon>
          </Link>
          <NotiBubble />
        </SC.IconContainer>
        {isCreating ? <CreateModal uploadProgress={uploadProgress} /> : null}
      </SC.Container>
    </>
  );
};

export default Header;
