import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import * as SC from "@/styles/styled/footer";
import { home, search, direct, film, noProfile } from "@/images/index";

const FooterIconContainer = () => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const id = user.member_id;

  return (
    <>
      <SC.Container>
        <SC.Icon>
          <Link href="/main">
            <Image src={home} alt="home" width={24} height={24} />
          </Link>
        </SC.Icon>
        <SC.Icon>
          <Link href="/explore">
            <Image src={search} alt="explore" width={24} height={24} />
          </Link>
        </SC.Icon>
        <SC.Icon>
          <Link href="/create">
            <Image src={film} alt="create-story" width={24} height={24} />
          </Link>
        </SC.Icon>
        <SC.Icon>
          <Link href="/direct/new">
            <Image src={direct} alt="direct-new" width={24} height={24} />
          </Link>
        </SC.Icon>
        <SC.Icon>
          <Link href={`/${id}`}>
            <Image src={noProfile} alt="user-page" width={24} height={24} />
          </Link>
        </SC.Icon>
      </SC.Container>
    </>
  );
};

export default FooterIconContainer;
