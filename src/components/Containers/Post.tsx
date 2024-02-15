import { useState, useEffect } from "react";
import { PostContentData } from "@/types/PostTypes";
import PostView from "../atoms/PostView";
import Error from "../atoms/Error";
import PostItem from "../Items/Post";
import getUserPostAll from "@/services/postInfo/getUserPostAll";
import getBookmarkedPostAll from "@/services/postInfo/getBookmarkedPostAll";
import getTaggedPostAll from "@/services/postInfo/getTaggedPostAll";

interface PostContainerProps {
  user_id: any;
  iconName: string;
}

const PostContainer: React.FC<PostContainerProps> = ({ user_id, iconName }) => {
  const [posts, setPosts] = useState<PostContentData[]>([]);
  const [bookmarkedPost, setBookmarkedPost] = useState<PostContentData[]>([]);
  const [taggedPost, setTaggedPost] = useState<PostContentData[]>([]);

  useEffect(() => {
    if (user_id) {
      fetchUserData(user_id);
    }
  }, [user_id, iconName]);

  const fetchUserData = async (userId: any) => {
    try {
      if (iconName === "saved") {
        const res = await getBookmarkedPostAll();
        setBookmarkedPost(res.data);
      } else if (iconName === "tagged") {
        const res = await getTaggedPostAll(userId);
        setTaggedPost(res.data);
      } else {
        const res = await getUserPostAll(userId);
        setPosts(res.data);
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  const renderContent = () => {
    if (iconName === "saved") {
      return (
        <>
          {bookmarkedPost && bookmarkedPost.length > 0 ? (
            <PostView posts={bookmarkedPost} />
          ) : (
            <Error message="게시글을 저장해보세요" />
          )}
        </>
      );
    } else if (iconName === "tagged") {
      return (
        <>
          {taggedPost && taggedPost.length > 0 ? (
            <PostView posts={taggedPost} />
          ) : (
            <Error message="태그 된 게시글이 없습니다" />
          )}
        </>
      );
    } else if (iconName === "calendar") {
      return (
        <>
          {posts && posts.length > 0 ? (
            <main style={{ marginBottom: "55px" }}>
              {posts.map((post) => (
                <PostItem key={post.postId} post={post} />
              ))}
            </main>
          ) : (
            <Error message="작성한 게시글이 없습니다" />
          )}
        </>
      );
    } else if (iconName === "grid" || iconName === "") {
      return (
        <>
          {posts && posts.length > 0 ? (
            <PostView posts={posts} />
          ) : (
            <Error message="게시글을 작성해보세요" />
          )}
        </>
      );
    }
  };

  return <>{renderContent()}</>;
};

export default PostContainer;
