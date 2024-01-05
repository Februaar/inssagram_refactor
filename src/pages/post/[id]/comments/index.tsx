import { ClosePageHeader } from "@/components/atoms/Header";
import StatusItem from "@/components/Items/Status";

const CommentedPostPage = () => {
  const pageTitle = "댓글";

  return (
    <>
      <ClosePageHeader title={pageTitle} />
      <StatusItem />
    </>
  );
};

export default CommentedPostPage;
