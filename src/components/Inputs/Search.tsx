import Link from "next/link";
import Image from "next/image";
import * as SC from "@/styles/styled/inputs_search";
import { search } from "@/images/index";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <>
      <SC.InputContainer>
        <SC.SearchIcon>
          <Image src={search} alt="search-input" width={18} height={18} />
        </SC.SearchIcon>
        <Link href="/explore/search">
          <SC.Input
            type="text"
            placeholder="검색"
            onChange={handleInputChange}
          />
        </Link>
      </SC.InputContainer>
    </>
  );
};

export default SearchInput;
