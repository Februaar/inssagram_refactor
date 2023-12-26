import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import getPostDetail from "@/services/postInfo/getPostDetail";
import { PostContentData } from "@/types/PostTypes";
import { PageHeader } from "@/components/atoms/Header";
import PostItem from "@/components/Items/Post";

const PostPage: React.FC<PostContentData> = () => {
  const pageTitle = "게시물";
  const router = useRouter();
  const { id } = router.query;
  const [postDetail, setPostDetail] = useState();

  useEffect(() => {
    if (id) {
      fetchPostDetailData(id);
    }
  }, [id]);

  const fetchPostDetailData = async (postId: any) => {
    try {
      const res = await getPostDetail(postId);
      setPostDetail(res.data);
    } catch (err) {
      console.error("error fetching post detail:", err);
    }
  };

  return (
    <>
      <PageHeader title={pageTitle} />
      <PostItem post={postDetail} />
    </>
  );
};

export default PostPage;
