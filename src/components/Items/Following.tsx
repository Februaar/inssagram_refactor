import CommonItem from "@/components/Items/Common";
import FollowButton from "@/components/Buttons/Follow";

interface FollowingItemProps {
  member: any;
}

const FollowingItem: React.FC<FollowingItemProps> = ({ member }) => {
  return (
    <CommonItem
      member={{
        id: member.following_Id,
        nickname: member.following_Name,
        image: member.following_Image,
        description: member.following_Description

      }}
      customContent={<FollowButton />}
    />
  );
};

export default FollowingItem;
