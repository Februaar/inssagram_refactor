import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserPageData } from "@/types/UserTypes";
import { PostContentData } from "@/types/PostTypes";
import getUserDetail from "@/services/userInfo/getUserDetail";
import UserHeader from "@/components/atoms/User";
import ProfileCard from "@/components/atoms/Profile";
import UserNavigation from "@/components/Containers/UserNav";
import PostNavigation from "@/components/Containers/PostNav";
import PostContainer from "@/components/Containers/Post";
import Footer from "@/components/Footer";

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const { id } = router.query;
  const [userInfo, setUserInfo] = useState<UserPageData | undefined>();
  const [postInfo, setPostInfo] = useState<PostContentData[] | undefined>();

  const isCurrentUser = user.member_id.toString() === id;

  useEffect(() => {
    if (id) {
      fetchUserDetailData(id);
    }
  }, [id]);

  const fetchUserDetailData = async (id: any) => {
    try {
      const res = await getUserDetail(id);
      setUserInfo(res.data);
      setPostInfo(res.data.posts);
    } catch (err) {
      console.error("error fetching member detail:", err);
    }
  };

  return (
    <>
      <section>
        <UserHeader user={userInfo} isLoggined={isCurrentUser} />
        <ProfileCard user={userInfo} isLoggined={isCurrentUser} />
        <UserNavigation user_id={id} user={userInfo} />
        <PostNavigation
          user_id={id}
          post={postInfo}
          isLoggined={isCurrentUser}
        />
        <PostContainer user_id={id} />
      </section>
      <Footer />
    </>
  );
};

export default UserPage;
