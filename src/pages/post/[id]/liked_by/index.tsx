import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { LikedPostMemberData } from "@/types/UserTypes";
import getLikePostMemberList from "@/services/postInfo/getLikePostMemberList";
import { ClosePageHeader } from "@/components/atoms/Header";
import StatusItem from "@/components/Items/Status";

const LikedPostPage = () => {
  const pageTitle = "좋아요";
  const router = useRouter();
  const { id } = router.query;
  const postId: number = typeof id === "string" ? parseInt(id, 10) : -1;

  const [likeMembers, setLikeMembers] = useState<
    LikedPostMemberData[] | undefined
  >([]);

  useEffect(() => {
    if (postId) {
      fetchLikePostMemberData(postId);
    }
  }, [postId]);

  const fetchLikePostMemberData = async (postId: number) => {
    try {
      const res = await getLikePostMemberList(postId);
      setLikeMembers(res.data);
    } catch (err) {
      console.error("error fetching likepostlist:", err);
    }
  };

  return (
    <>
      <ClosePageHeader title={pageTitle} />
      {likeMembers &&
        likeMembers.map((member) => (
          <StatusItem key={member.memberId} member={member} />
        ))}
    </>
  );
};

export default LikedPostPage;
