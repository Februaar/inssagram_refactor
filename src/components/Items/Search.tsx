import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { noProfile } from "@/images";
import { SearchResultData } from "@/types/SearchTypes";

interface SearchItemProps {
  result: SearchResultData;
  onClick: (memberId: string) => void;
}

const SearchItem: React.FC<SearchItemProps> = ({ result, onClick }) => {
  return (
    <Link href={`/${result.memberId}`} onClick={() => onClick(result.memberId)}>
      <ItemContainer>
        <div className="profile-img">
          <Image
            src={result.image ? result.image : noProfile}
            alt="profile"
            width={44}
            height={44}
            style={{ borderRadius: "100%" }}
          />
        </div>
        <div className="result-area">
          <p>{result.nickName}</p>
          <span>{result.job}</span>
        </div>
      </ItemContainer>
    </Link>
  );
};

export default SearchItem;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  padding: 8px 16px;

  .profile-img {
    width: 44px;
    margin-right: 14px;
  }

  .result-area {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 3px;

    span {
      color: #92a8d1;
      font-size: 12px;
    }
  }
`;
