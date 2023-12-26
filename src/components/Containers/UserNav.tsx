import { UserPageData } from "@/types/UserTypes";

import styled from "styled-components";

interface UserNavProps {
  user_id: any;
  user: UserPageData | undefined;
}

const UserNavigation: React.FC<UserNavProps> = ({ user_id, user }) => {
  return (
    <>
      {user ? (
        <Container>
          <Nav>
            <Title>게시물</Title>
            <span>{user.posts}</span>
          </Nav>
          <Nav>
            <Link href={`/${user_id}/followers`}>
              <Title>팔로워</Title>
              <span>{user.followers.length}</span>
            </Link>
          </Nav>
          <Nav>
            <Link href={`/${user_id}/following`}>
              <Title>팔로우</Title>
              <span>{user.following.length}</span>
            </Link>
          </Nav>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default UserNavigation;

const Container = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 12px 0;
  height: 60px;
  border-top: 1px solid #dbdbdb;
`;

const Nav = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 33.3%;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 35.33px;
`;

const Title = styled.span`
  color: #737373;
`;
