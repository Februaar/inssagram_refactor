import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PageHeader } from "@/components/atoms/Header";
import CommentContainer from "@/components/Containers/Comment";
import Footer from "@/components/Footer";
import getCommentAll from "@/services/postInfo/getCommentAll";
import getPostDetail from "@/services/postInfo/getPostDetail";

const CommentedPostPage = () => {
  const pageTitle = "댓글";
  const router = useRouter();
  const { id } = router.query;
  const postId: number = typeof id === "string" ? parseInt(id, 10) : -1;

  const [original, setOriginal] = useState<string>("");
  console.log(original);
  const [comments, setComments] = useState<string[]>([]);
  console.log(comments);

  const fetchOriginalData = async (postId: number) => {
    try {
      const res = await getPostDetail(postId);
      setOriginal(res.data);
    } catch (err) {
      console.error("error fetching original comment data:", err);
    }
  };

  const fetchCommentAllData = async (postId: number) => {
    try {
      const res = await getCommentAll(postId);
      setComments(res.data);
    } catch (err) {
      console.error("error fetching comments data:", err);
    }
  };

  useEffect(() => {
    if (postId !== -1) {
      fetchOriginalData(postId);
      fetchCommentAllData(postId);
    }
  }, [postId]);

  return (
    <>
      <PageHeader title={pageTitle} />
      <CommentContainer original={original} comments={comments} />
      <Footer />
    </>
  );
};

export default CommentedPostPage;
