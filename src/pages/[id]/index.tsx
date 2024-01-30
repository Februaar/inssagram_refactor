import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserPageData } from "@/types/UserTypes";
import getUserDetail from "@/services/userInfo/getUserDetail";
import UserHeader from "@/components/atoms/User";
import ProfileCard from "@/components/atoms/Profile";
import DescriptionCard from "@/components/atoms/Description";
import UserNavigation from "@/components/Containers/UserNav";
import PostNavigation from "@/components/Containers/PostNav";
import PostContainer from "@/components/Containers/Post";
import Footer from "@/components/Footer";

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const { id } = router.query;
  const isCurrentUser = id === user.member_id.toString();

  const [userInfo, setUserInfo] = useState<UserPageData | undefined>();
  const [postCount, setPostCount] = useState<number>();
  const [iconName, setIconName] = useState<string>("");

  useEffect(() => {
    if (id) {
      fetchUserDetailData(id);
    }
  }, [id]);

  const fetchUserDetailData = async (id: any) => {
    try {
      const res = await getUserDetail(id);
      setUserInfo(res.data);
      setPostCount(res.data.posts);
    } catch (err) {
      console.error("error fetching member detail:", err);
    }
  };

  const handleIconClick = (iconName: string) => {
    setIconName(iconName);
  };

  return (
    <>
      <section>
        <UserHeader user={userInfo} isLoggined={isCurrentUser} />
        <ProfileCard user={userInfo} isLoggined={isCurrentUser} />
        <DescriptionCard user={userInfo} />
        <UserNavigation user_id={id} user={userInfo} post={postCount} />
        <PostNavigation
          isLoggined={isCurrentUser}
          onIconClick={handleIconClick}
        />
        <PostContainer user_id={id} iconName={iconName} />
      </section>
      <Footer />
    </>
  );
};

export default UserPage;
