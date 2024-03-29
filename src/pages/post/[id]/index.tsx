import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PostContentData } from "@/types/PostTypes";
import getPostDetail from "@/services/postInfo/getPostDetail";
import { PageHeader } from "@/components/atoms/Header";
import PostItem from "@/components/Items/Post";
import Footer from "@/components/Footer";

const PostPage = () => {
  const pageTitle = "게시물";
  const router = useRouter();
  const { id } = router.query;
  const [postDetail, setPostDetail] = useState<PostContentData[]>([]);

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
    <section>
      <PageHeader title={pageTitle} />
      <PostItem post={postDetail} />
      <Footer />
    </section>
  );
};

export default PostPage;
