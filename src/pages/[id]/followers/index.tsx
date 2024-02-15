import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { UserPageData } from "@/types/UserTypes";
import postUserDetail from "@/services/userInfo/postUserDetail";
import { PageHeader } from "@/components/atoms/Header";
import FollowersItem from "@/components/Items/Followers";
import Error from "@/components/atoms/Error";

const FollowersPage = () => {
  const pageTitle = "팔로워";
  const router = useRouter();
  const { id } = router.query;
  const [followers, setFollowers] = useState<UserPageData["followers"] | null>(
    null
  );

  useEffect(() => {
    if (id) {
      fetchFollowersData(id);
    }
  }, [id]);

  const fetchFollowersData = async (id: any) => {
    try {
      const res = await postUserDetail(id);
      setFollowers(res.data.followers);
    } catch (err) {
      console.error("error fetching likepostlist:", err);
    }
  };

  return (
    <section>
      <PageHeader title={pageTitle} />
      {followers && followers.length > 0 ? (
        followers.map((member) => (
          <FollowersItem key={member.followerId} member={member} />
        ))
      ) : (
        <Error message="아직 연결된 동료가 없습니다" />
      )}
    </section>
  );
};

export default FollowersPage;
