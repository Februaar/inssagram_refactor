import Footer from "@/components/Footer";
import UserHeader from "@/components/atoms/User";
import ProfileCard from "@/components/atoms/Profile";
import UserNavigation from "@/components/Containers/UserNav";
import PostNavigation from "@/components/Containers/PostNav";
import PostContainer from "@/components/Containers/Post";

const UserPage = () => {
  return (
    <>
      <section>
        <UserHeader />
        <ProfileCard />
        <UserNavigation />
        <PostNavigation />
        <PostContainer />
      </section>
      <Footer />
    </>
  );
};

export default UserPage;
