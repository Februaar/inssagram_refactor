import { useState } from "react";
import CommonItem from "@/components/Items/Common";
import FollowButton from "@/components/Buttons/Follow";
import postUserFollow from "@/services/userInfo/postUserFollow";

interface FollowingItemProps {
  member: any;
}

const FollowingItem: React.FC<FollowingItemProps> = ({ member }) => {
  const [isFriend, setIsFriend] = useState<boolean>(
    member.friend_Status === true
  );

  const handleFollowClick = async (memberId: string) => {
    try {
      await postUserFollow(memberId);
      setIsFriend(!isFriend);
    } catch (err) {
      console.error("error following member:", err);
    }
  };

  return (
    <CommonItem
      member={{
        id: member.following_Id,
        nickname: member.following_Name,
        image: member.following_Image,
        description: member.following_Description,
        status: member.friend_Status,
      }}
      customContent={
        <FollowButton
          onClick={() => handleFollowClick(member.following_Id)}
          status={isFriend}
        />
      }
    />
  );
};

export default FollowingItem;
