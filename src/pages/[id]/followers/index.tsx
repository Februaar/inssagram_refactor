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

  const [mutual, setMutual] = useState<string>("");
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
      const res = await getUserDetail(id);
      const mutualFollowing = res.data.followers.filter((follower: any) =>
        res.data.following.some(
          (following: any) => follower.followerId === following.following_Id
        )
      );
      setMutual(mutualFollowing); // 서로 팔로우하는 관계
      setFollowers(res.data.followers); // 팔로워 리스트
    } catch (err) {
      console.error("error fetching likepostlist:", err);
    }
  };

  return (
    <>
      <PageHeader title={pageTitle} />
      {followers &&
        followers.map((member) => (
          <FollowersItem
            key={member.followerId}
            member={member}
            // mutual={mutual}
          />
        ))}
    </>
  );
};

export default FollowersPage;
