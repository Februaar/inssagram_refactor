import { UserPageData } from "@/types/UserTypes";
import Link from "next/link";
import Image from "next/image";
import { setting, accountAdd } from "@/images";
import styled from "styled-components";
import { PageHeader } from "@/components/atoms/Header";

interface UserHeaderProps {
  user: UserPageData | undefined;
  isLoggined: boolean;
}

const UserHeader: React.FC<UserHeaderProps> = ({ user, isLoggined }) => {
  return (
    <>
      {isLoggined && user ? (
        <HeaderContainer>
          <Link href="/accounts/edit">
            <Image src={setting} alt="profile" width={24} height={24} />
          </Link>
          <h2>{user.nickname}</h2>
          <Link href="/explore/people">
            <Image src={accountAdd} alt="profile" width={24} height={24} />
          </Link>
        </HeaderContainer>
      ) : (
        user && <PageHeader title={user.nickname} />
      )}
    </>
  );
};

export default UserHeader;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 375px;
  min-height: 44px;
  padding: 0 16px;
  border-bottom: 1px solid #dbdbdb;
`;
