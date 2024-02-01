import { UserPageData } from "@/types/UserTypes";
import styled from "styled-components";

interface UserNavProps {
  user_id: any;
  user: UserPageData | undefined;
  post: number | undefined;
}

const UserNavigation: React.FC<UserNavProps> = ({ user_id, user, post }) => {
  return (
    <>
      {user && (
        <NavContainer>
          <li>
            <span className="title">게시물</span>
            <span>{post}</span>
          </li>
          <li>
            <a href={`/${user_id}/followers`}>
              <span className="title">팔로워</span>
              <span>{user.followers.length}</span>
            </a>
          </li>
          <li>
            <a href={`/${user_id}/following`}>
              <span className="title">팔로우</span>
              <span>{user.following.length}</span>
            </a>
          </li>
        </NavContainer>
      )}
    </>
  );
};

export default UserNavigation;

const NavContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  height: 60px;
  padding: 12px 0;
  border-top: 1px solid #dbdbdb;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 33.3%;

    .title {
      color: #737373;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 35.33px;
  }
`;
