import { PageHeader } from "@/components/atoms/Header";
import CommentContainer from "@/components/Containers/Comment";
import Footer from "@/components/Footer";

const CommentedPostPage = () => {
  const pageTitle = "댓글";

  return (
    <>
      <PageHeader title={pageTitle} />
      <CommentContainer />
      <Footer />
    </>
  );
};

export default CommentedPostPage;
