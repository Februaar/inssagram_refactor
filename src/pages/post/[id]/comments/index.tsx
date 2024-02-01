import { useRouter } from "next/router";
import { PageHeader } from "@/components/atoms/Header";
import CommentContainer from "@/components/Containers/Comment";
import Footer from "@/components/Footer";

const CommentedPostPage = () => {
  const pageTitle = "댓글";
  const router = useRouter();
  const { id } = router.query;
  const postId: number = typeof id === "string" ? parseInt(id, 10) : -1;

  return (
    <section>
      <PageHeader title={pageTitle} />
      <CommentContainer postId={postId} />
      <Footer />
    </section>
  );
};

export default CommentedPostPage;
