import CommonItem from "@/components/Items/Common";
import DeleteButton from "@/components/Buttons/Delete";
import postUserFollow from "@/services/userInfo/postUserFollow";

interface FollowersItemProps {
  member: any;
}

const FollowersItem: React.FC<FollowersItemProps> = ({ member }) => {
  const handleFollowClick = async (memberId: string) => {
    try {
      await postUserFollow(memberId);
    } catch (err) {
      console.error("error following member:", err);
    }
  };

  return (
    <CommonItem
      member={{
        id: member.followerId,
        nickname: member.followerName,
        image: member.followerImage,
        description: member.followerDescription,
        status: member.friendStatus,
      }}
      customContent={
        <DeleteButton onClick={() => handleFollowClick(member.following_Id)} />
      }
    />
  );
};

export default FollowersItem;
