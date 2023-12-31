import { UserPageData } from "@/types/UserTypes";
import Link from "next/link";
import Image from "next/image";
import { setting, accountAdd } from "@/images/index";
import * as SC from "@/styles/styled/atoms_user";
import { PageHeader } from "@/components/atoms/Header";

interface UserHeaderProps {
  user: UserPageData | undefined;
  isLoggined: boolean;
}

const UserHeader: React.FC<UserHeaderProps> = ({ user, isLoggined }) => {
  return (
    <>
      {isLoggined && user ? (
        <SC.Container>
          <Link href="/accounts/setting">
            <Image src={setting} alt="profile" width={24} height={24} />
          </Link>
          <h2>{user.nickname}</h2>
          <Link href="/explore/people">
            <Image src={accountAdd} alt="profile" width={24} height={24} />
          </Link>
        </SC.Container>
      ) : (
        user && <PageHeader title={user.nickname} />
      )}
    </>
  );
};

export default UserHeader;
