import Link from "next/link";
import { useState, useEffect } from "react";
import { PostContentData } from "@/types/PostTypes";
import getPostAll from "@/services/postInfo/getPostAll";
import styled from "styled-components";
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

  return (
    <>
      <>
        <SearchInput />
        {loading ? (
          <Loading />
        ) : (
          <Article>
            {posts &&
              posts.map((post) => (
                <Link href={`/post/${post.postId}`} key={post.postId}>
                  <PostView post={post} />
                </Link>
              ))}
          </Article>
        )}
      </>
      <Footer />
    </>
  );
};

export default ExplorePage;

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  width: 100%;
  height: 100%;
`;
