import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { UserPageData } from "@/types/UserTypes";
import getUserDetail from "@/services/userInfo/getUserDetail";
import { PageHeader } from "@/components/atoms/Header";
import FollowingItem from "@/components/Items/Following";

const FollowingPage = () => {
  const pageTitle = "팔로잉";
  const router = useRouter();
  const { id } = router.query;
  // const memberId: number = typeof id === "string" ? parseInt(id, 10) : -1;

  const [following, setFollowing] = useState<UserPageData["following"] | null>(
    null
  );

  useEffect(() => {
    if (id) {
      fetchFollowingData(id);
    }
  }, [id]);

  const fetchFollowingData = async (id: any) => {
    try {
      const res = await getUserDetail(id);
      setFollowing(res.data.following);
    } catch (err) {
      console.error("error fetching likepostlist:", err);
    }
  };

  return (
    <>
      <PageHeader title={pageTitle} />
      {following &&
        following.map((member) => (
          <FollowingItem key={member.following_Id} member={member} />
        ))}
    </>
  );
};

export default FollowingPage;
