import { useState, useEffect } from "react";
import { PostContentData } from "@/types/PostTypes";
import getUserPostAll from "@/services/postInfo/getUserPostAll";
import PostView from "../atoms/PostView";
import Error from "../atoms/Error";

interface PostContainerProps {
  user_id: any;
}

const PostContainer: React.FC<PostContainerProps> = ({ user_id }) => {
  const [posts, setPosts] = useState<PostContentData[] | undefined>([]);

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
        <PostView posts={posts} />
      ) : (
        <Error message="게시글을 작성해보세요" />
      )}
    </>
  );
};

export default PostContainer;
