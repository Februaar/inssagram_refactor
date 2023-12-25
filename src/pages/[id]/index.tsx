import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserPageData } from "@/types/UserTypes";
import getUserDetail from "@/services/userInfo/getUserDetail";
import Footer from "@/components/Footer";
import UserHeader from "@/components/atoms/User";
import ProfileCard from "@/components/atoms/Profile";
import UserNavigation from "@/components/Containers/UserNav";
import PostNavigation from "@/components/Containers/PostNav";
import PostContainer from "@/components/Containers/Post";

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [userInfo, setUserInfo] = useState<UserPageData | undefined>();

  useEffect(() => {
    if (id) {
      fetchUserDetailData(id);
    }
  }, [id]);

  const fetchUserDetailData = async (id: any) => {
    try {
      const res = await getUserDetail(id);
      setUserInfo(res.data);
    } catch (err) {
      console.error("error fetching member detail:", err);
    }
  };

  return (
    <>
      <section>
        <UserHeader user={userInfo} />
        <ProfileCard user={userInfo}/>
        <UserNavigation />
        <PostNavigation />
        <PostContainer />
      </section>
      <Footer />
    </>
  );
};

export default UserPage;
