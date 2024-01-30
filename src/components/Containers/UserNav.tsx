import { UserPageData } from "@/types/UserTypes";
import * as SC from "@/styles/styled/containers_usernav";

interface UserNavProps {
  user_id: any;
  user: UserPageData | undefined;
  post: number | undefined;
}

const UserNavigation: React.FC<UserNavProps> = ({ user_id, user, post }) => {
  return (
    <>
      {user && (
        <SC.Container>
          <SC.Nav>
            <SC.Title>게시물</SC.Title>
            <span>{post}</span>
          </SC.Nav>
          <SC.Nav>
            <SC.Link href={`/${user_id}/followers`}>
              <SC.Title>팔로워</SC.Title>
              <span>{user.followers.length}</span>
            </SC.Link>
          </SC.Nav>
          <SC.Nav>
            <SC.Link href={`/${user_id}/following`}>
              <SC.Title>팔로우</SC.Title>
              <span>{user.following.length}</span>
            </SC.Link>
          </SC.Nav>
        </SC.Container>
      )}
    </>
  );
};

export default UserNavigation;
