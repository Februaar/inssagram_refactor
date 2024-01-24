import CommonItem from "@/components/Items/Common";
import DeleteButton from "@/components/Buttons/Delete";

interface FollowersItemProps {
  member: any;
}

const FollowersItem: React.FC<FollowersItemProps> = ({ member }) => {
  return (
    <CommonItem
      member={{
        id: member.followerId,
        nickname: member.followerName,
        image: member.followerImage,
      }}
      customContent={<DeleteButton />}
    />
  );
};

export default FollowersItem;
