import { useEffect, useCallback } from "react";
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
  const user = useSelector((state: RootState) => state.user);
  const posts = useSelector((state: RootState) => state.post.posts);

  const requireToken = user === null;
  // console.log(requireToken);

  const fetchPostAllData = useCallback(async () => {
    try {
      const res = await getPostAll();
      dispatch(setPosts(res.data));
    } catch (err) {
      console.error("error fetching post data:", err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchPostAllData();
  }, [fetchPostAllData]);

  return (
    <section>
      <Header />
      <main style={{ paddingTop: "44px", marginBottom: "55px" }}>
        <StoryItem />
        {requireToken ? (
          <div style={{ padding: " 12px 16px" }}>로그인 해보세요</div>
        ) : (
          posts &&
          posts.map((post) => <PostItem key={post.postId} post={post} />)
        )}
      </main>
      <Footer />
    </section>
  );
};

export default MainPage;
