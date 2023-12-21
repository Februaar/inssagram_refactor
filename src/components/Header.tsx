import Link from "next/link";
import Image from "next/image";
import { plus, favorite } from "@/images/index";
import * as SC from "@/styles/styled/header";
import NotiBubble from "@/components/Items/Bubble";

const Header = () => {
  return (
    <>
      <SC.Container>
        <Link href="/">
          <h1>Inssagram</h1>
        </Link>
        <SC.IconContainer>
          <SC.CreateIcon>
            <Image src={plus} alt="create-boards" />
          </SC.CreateIcon>
          <Link href="/notifications">
            <SC.NotificationIcon>
              <Image src={favorite} alt="notifications-page" />
            </SC.NotificationIcon>
          </Link>
          <NotiBubble />
        </SC.IconContainer>
      </SC.Container>
    </>
  );
};

export default Header;
