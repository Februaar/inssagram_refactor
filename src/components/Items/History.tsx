import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { noProfile, close } from "@/images";
import { SearchHistoryData } from "@/types/SearchTypes";

interface HistoryItemProps {
  history: SearchHistoryData;
  onDelete: (searched: string) => void;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ history, onDelete }) => {
  return (
    <ItemContainer>
      <Link href={`/${history.memberId}`}>
        <div className="profile">
          <Image
            src={history.image ? history.image : noProfile}
            alt="profile"
            width={44}
            height={44}
            style={{ borderRadius: "100%" }}
          />
        </div>
      </Link>
      <HistoryArea>
        <div className="info-area">
          <p>{history.searched}</p>
          <div className="details">
            <span className="job">{history.job}</span>
            <span className="status">
              {history.friendStatus ? " · 팔로잉" : ""}
            </span>
          </div>
        </div>
        <div
          className="delete-button"
          onClick={() => onDelete(history.searched)}
        >
          <Image src={close} alt="delete-button" width={18} height={18} />
        </div>
      </HistoryArea>
    </ItemContainer>
  );
};

export default HistoryItem;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  padding: 8px 16px;

  .profile {
    width: 44px;
    margin-right: 14px;
  }
`;

const HistoryArea = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;

  .info-area {
    display: grid;
    grid-row-gap: 3px;

    .details {
      font-size: 12px;

      .job {
        color: #92a8d1;
      }

      .status {
        color: #737373;
      }
    }
  }

  .delete-button {
    margin-right: 8px;
  }
`;
