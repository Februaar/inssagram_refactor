import { useState, useEffect } from "react";
import getPostAll from "@/services/postInfo/getPostAll";
import { PostContentData } from "@/types/PostTypes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryItem from "@/components/Items/Story";
import PostItem from "@/components/Items/Post";

const MainPage = () => {
  const [posts, setPosts] = useState<PostContentData[] | undefined>([]);

  useEffect(() => {
    fetchPostAllData();
  }, []);

  const fetchPostAllData = async () => {
    try {
      const res = await getPostAll();
      setPosts(res.data);
    } catch (err) {
      console.error("error fetching post data:", err);
    }
  };

  return (
    <section>
      <Header />
      <main>
        <StoryItem />
        {posts && posts.map((post) => (
          <PostItem key={post.postId} post={post} />
        ))}
      </main>
      <Footer />
    </section>
  );
};

export default MainPage;
