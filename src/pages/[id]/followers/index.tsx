import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { UserPageData } from "@/types/UserTypes";
import getUserDetail from "@/services/userInfo/getUserDetail";
import { PageHeader } from "@/components/atoms/Header";
import FollowersItem from "@/components/Items/Followers";

const FollowersPage = () => {
  const pageTitle = "팔로워";
  const router = useRouter();
  const { id } = router.query;
  // const postId: number = typeof id === "string" ? parseInt(id, 10) : -1;

  const [followers, setFollowers] = useState<UserPageData["followers"] | null>(
    null
  );
  console.log(followers);

  useEffect(() => {
    if (id) {
      fetchFollowersData(id);
    }
  }, [id]);

  const fetchFollowersData = async (id: any) => {
    try {
      const res = await getUserDetail(id);
      setFollowers(res.data.followers);
    } catch (err) {
      console.error("error fetching likepostlist:", err);
    }
  };

  return (
    <>
      <PageHeader title={pageTitle} />
      {followers &&
        followers.map((member) => (
          <FollowersItem key={member.followerId} member={member} />
        ))}
    </>
  );
};

export default FollowersPage;
