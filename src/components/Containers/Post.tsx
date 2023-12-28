import getUserPostAll from "@/services/postInfo/getUserPostAll";
import { PostContentData } from "@/types/PostTypes";
import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import PostView from "../atoms/PostView";
import Error from "../atoms/Error";

interface PostContainerProps {
  user_id: any;
}

const PostContainer: React.FC<PostContainerProps> = ({ user_id }) => {
  const [posts, setPosts] = useState<PostContentData[] | undefined>();
  console.log(posts);

  useEffect(() => {
    if (user_id) {
      fetchUserPostAllData(user_id);
    }
  }, [user_id]);

  const fetchUserPostAllData = async (memberId: any) => {
    try {
      const res = await getUserPostAll(memberId);
      setPosts(res.data);
    } catch (err) {
      console.error("error fetching user's post all:", err);
    }
  };

  return (
    <>
      {posts && posts.length > 0 ? (
        <Article>
          {posts.map((post) => (
            <Link href={`/post/${post.postId}`} key={post.postId}>
              <PostView post={post} />
            </Link>
          ))}
        </Article>
      ) : (
        <Error message="게시글을 작성해보세요" />
      )}
    </>
  );
};

export default PostContainer;

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  width: 100%;
  height: 100%;
`;
