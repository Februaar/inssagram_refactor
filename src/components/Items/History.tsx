import Link from "next/link";
import Image from "next/image";
import * as SC from "@/styles/styled/inputs_history";
import { noProfile, close } from "@/images/index";
import { SearchHistoryData } from "@/types/SearchTypes";

interface HistoryItemProps {
  history: SearchHistoryData;
  onDelete: (searched: string) => void;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ history, onDelete }) => {
  return (
    <>
      <SC.ItemContainer>
        <Link href={`/${history.memberId}`}>
          <SC.Profile>
            <Image
              src={history.image ? history.image : noProfile}
              alt="profile"
              width={44}
              height={44}
              style={{ borderRadius: "100%" }}
            />
          </SC.Profile>
        </Link>
        <SC.HistoryArea>
          <SC.HistoryInfo>
            <SC.Account>{history.searched}</SC.Account>
            <SC.DetailInfo>
              <SC.Job>{history.job}</SC.Job>
              <SC.FriendStatus>
                {history.friendStatus ? " · 팔로잉" : ""}
              </SC.FriendStatus>
            </SC.DetailInfo>
          </SC.HistoryInfo>
          <SC.DeleteBtn onClick={() => onDelete(history.searched)}>
            <Image src={close} alt="delete-button" width={18} height={18} />
          </SC.DeleteBtn>
        </SC.HistoryArea>
      </SC.ItemContainer>
    </>
  );
};

export default HistoryItem;
