import { LikedPostMemberData } from "@/types/UserTypes";
import * as SC from "@/styles/styled/items_status";
import { noProfile } from "@/images/index";
import FollowButton from "@/components/Buttons/Follow";

interface StatusItemProps {
  member: LikedPostMemberData;
}

const StatusItem: React.FC<StatusItemProps> = ({ member }) => {
  return (
    <>
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
    </>
  );
};

export default StatusItem;
