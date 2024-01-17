import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setPosts } from "@/redux/postSlice";
import getPostAll from "@/services/postInfo/getPostAll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryItem from "@/components/Items/Story";
import PostItem from "@/components/Items/Post";

const MainPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.post.posts);

  useEffect(() => {
    fetchPostAllData();
  }, []);

  const fetchPostAllData = async () => {
    try {
      const res = await getPostAll();
      dispatch(setPosts(res.data));
    } catch (err) {
      console.error("error fetching post data:", err);
    }
  };

  return (
    <section>
      <Header />
      <main>
        <StoryItem />
        {posts &&
          posts.map((post) => <PostItem key={post.postId} post={post} />)}
      </main>
      <Footer />
    </section>
  );
};

export default MainPage;
