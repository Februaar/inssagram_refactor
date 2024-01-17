import { useState, useEffect } from "react";
import { LikedPostMemberData } from "@/types/UserTypes";
import * as SC from "@/styles/styled/items_status";
import { noProfile } from "@/images/index";
import FollowButton from "@/components/Buttons/Follow";
import getLikePostMemberList from "@/services/postInfo/getLikePostMemberList";

interface StatusItemProps {
  postId: number;
}

const StatusItem: React.FC<StatusItemProps> = ({ postId }) => {
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
      {likeMembers &&
        likeMembers.map((member) => (
          <SC.ItemContainer key={member.memberId}>
            <SC.ClickTo href={`/${member.memberId}`} passHref>
              <SC.AccountImg
                src={member.memberProfile ? member.memberProfile : noProfile}
                alt="프로필 이미지"
                width={44}
                height={44}
              />
              <SC.ContentArea>
                <SC.AccountInfo>
                  <SC.Id>{member.memberNickname}</SC.Id>
                </SC.AccountInfo>
              </SC.ContentArea>
            </SC.ClickTo>
            <FollowButton />
          </SC.ItemContainer>
        ))}
    </>
  );
};

export default StatusItem;
