import { useRouter } from "next/router";
import { ClosePageHeader } from "@/components/atoms/Header";
import StatusItem from "@/components/Items/Status";

const LikedPostPage = () => {
  const pageTitle = "좋아요";
  const router = useRouter();
  const { id } = router.query;
  const postId: number = typeof id === "string" ? parseInt(id, 10) : -1;

  return (
    <>
      <ClosePageHeader title={pageTitle} />
      <StatusItem postId={postId} />
    </>
  );
};

export default LikedPostPage;
