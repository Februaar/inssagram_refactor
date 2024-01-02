import Link from "next/link";
import Image from "next/image";
import * as SC from "@/styles/styled/items_search";
import { noProfile } from "@/images/index";
import { SearchResultData } from "@/types/SearchTypes";

interface SearchItemProps {
  result: SearchResultData;
  onClick: (memberId: number) => void;
}

const SearchItem: React.FC<SearchItemProps> = ({ result, onClick }) => {
  return (
    <>
      <Link
        href={`/${result.memberId}`}
        onClick={() => onClick(result.memberId)}
      >
        <SC.ItemContainer>
          <SC.Profile>
            <Image
              src={result.image ? result.image : noProfile}
              alt="profile"
              width={44}
              height={44}
              style={{ borderRadius: "100%" }}
            />
          </SC.Profile>
          <SC.ResultArea>
            <SC.Account>{result.nickName}</SC.Account>
            <SC.Job>{result.job}</SC.Job>
          </SC.ResultArea>
        </SC.ItemContainer>
      </Link>
    </>
  );
};

export default SearchItem;
