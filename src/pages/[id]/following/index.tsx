import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { UserPageData } from "@/types/UserTypes";
import postUserDetail from "@/services/userInfo/postUserDetail";
import { PageHeader } from "@/components/atoms/Header";
import FollowingItem from "@/components/Items/Following";
import Error from "@/components/atoms/Error";

const FollowingPage = () => {
  const pageTitle = "팔로잉";
  const router = useRouter();
  const { id } = router.query;
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
      const res = await postUserDetail(id);
      setFollowing(res.data.following);
    } catch (err) {
      console.error("error fetching likepostlist:", err);
    }
  };

  return (
    <section>
      <PageHeader title={pageTitle} />
      <>
        {following && following.length > 0 ? (
          following.map((member) => (
            <FollowingItem key={member.following_Id} member={member} />
          ))
        ) : (
          <Error message="새로운 동료를 팔로우 해보세요" />
        )}
      </>
    </section>
  );
};

export default FollowingPage;
