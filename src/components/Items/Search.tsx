import Link from "next/link";
import Image from "next/image";
import * as SC from "@/styles/styled/items_search";
import { noProfile } from "@/images/index";
import { SearchResultData } from "@/types/SearchTypes";
import CommonItem from "@/components/Items/Common";

interface SearchItemProps {
  member: SearchResultData;
  onClick: (memberId: number) => void;
}

const SearchItem: React.FC<SearchItemProps> = ({ member, onClick }) => {
  return <CommonItem member={member} customContent={""} />;
  // <>
  //   <Link
  //     href={`/${result.memberId}`}
  //     onClick={() => onClick(result.memberId)}
  //   >
  //     <SC.ItemContainer>
  //       <SC.Profile>
  //         <Image
  //           src={result.image ? result.image : noProfile}
  //           alt="profile"
  //           width={44}
  //           height={44}
  //           style={{ borderRadius: "100%" }}
  //         />
  //       </SC.Profile>
  //       <SC.ResultArea>
  //         <SC.Account>{result.nickName}</SC.Account>
  //         <SC.Job>{result.job}</SC.Job>
  //       </SC.ResultArea>
  //     </SC.ItemContainer>
  //   </Link>
  // </>
};

export default SearchItem;
