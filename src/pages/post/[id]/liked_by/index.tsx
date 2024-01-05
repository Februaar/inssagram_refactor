import { ClosePageHeader } from "@/components/atoms/Header";
import StatusItem from "@/components/Items/Status";

const LikedPostPage = () => {
  const pageTitle = "좋아요";

  return (
    <>
      <ClosePageHeader title={pageTitle} />
      <StatusItem />
    </>
  );
};

export default LikedPostPage;
