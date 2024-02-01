import { useState, useEffect } from "react";
import { PostContentData } from "@/types/PostTypes";
import getPostAll from "@/services/postInfo/getPostAll";
import SearchInput from "@/components/Inputs/Search";
import PostView from "@/components/atoms/PostView";
import Loading from "@/components/Icons/Loading";
import Footer from "@/components/Footer";

const ExplorePage = () => {
  const [posts, setPosts] = useState<PostContentData[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchPostAllData();
  }, []);

  const fetchPostAllData = async () => {
    try {
      const res = await getPostAll();
      const randomOrder = res.data.sort(() => Math.random() - 0.5);
      setPosts(randomOrder);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.error("error fetching post data:", err);
    }
  };

  const handleSearch = (searchTerm: string) => {
    console.log("Search term:", searchTerm);
  };

  return (
    <section>
      <>
        <SearchInput onSearch={handleSearch} />
        {loading ? <Loading /> : <PostView posts={posts} />}
      </>
      <Footer />
    </section>
  );
};

export default ExplorePage;
