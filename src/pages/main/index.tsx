import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryItem from "@/components/Items/Story";
import PostItem from "@/components/Items/Post";

const MainPage = () => {
  return (
    <section>
      <Header />
      <main>
        <StoryItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </main>
      <Footer />
    </section>
  );
};

export default MainPage;
