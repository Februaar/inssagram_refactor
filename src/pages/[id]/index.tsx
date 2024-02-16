import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { loginUser } from "@/redux/userSlice";
import { UserPageData } from "@/types/UserTypes";
import postUserDetail from "@/services/userInfo/postUserDetail";
import UserHeader from "@/components/atoms/User";
import ProfileCard from "@/components/atoms/Profile";
import DescriptionCard from "@/components/atoms/Description";
import UserNavigation from "@/components/Containers/UserNav";
import PostNavigation from "@/components/Containers/PostNav";
import PostContainer from "@/components/Containers/Post";
import Footer from "@/components/Footer";

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const isCurrentUser = id === user.member_id.toString();

  const [userInfo, setUserInfo] = useState<UserPageData | undefined>();
  const [postCount, setPostCount] = useState<number>();
  const [iconName, setIconName] = useState<string>("");

  const fetchUserDetailData = useCallback(
    async (id: any) => {
      try {
        const res = await postUserDetail(id);
        setUserInfo(res.data);
        setPostCount(res.data.posts);
        if (isCurrentUser) {
          dispatch(loginUser(res.data));
        }
      } catch (err) {
        console.error("error fetching member detail:", err);
      }
    },
    [dispatch, isCurrentUser]
  );

  useEffect(() => {
    if (id) {
      fetchUserDetailData(id);
    }
  }, [fetchUserDetailData, id]);

  const handleIconClick = (iconName: string) => {
    setIconName(iconName);
  };

  return (
    <section>
      <UserHeader user={userInfo} isLoggined={isCurrentUser} />
      <ProfileCard
        id={typeof id === "string" ? id : ""}
        user={userInfo}
        isLoggined={isCurrentUser}
      />
      <DescriptionCard user={userInfo} />
      <UserNavigation user_id={id} user={userInfo} post={postCount} />
      <PostNavigation
        isLoggined={isCurrentUser}
        onIconClick={handleIconClick}
      />
      <div className="scroll-container">
        <PostContainer user_id={id} iconName={iconName} />
      </div>
      <Footer />
    </section>
  );
};

export default UserPage;
