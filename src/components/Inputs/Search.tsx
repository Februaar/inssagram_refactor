import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
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
    <InputContainer>
      <div className="icon">
        <Image src={search} alt="search-input" width={18} height={18} />
      </div>
      <Link href="/explore/search">
        <input type="text" placeholder="검색" onChange={handleInputChange} />
      </Link>
    </InputContainer>
  );
};

export default SearchInput;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 5fr;
  align-items: center;
  margin: 10px 16px;
  padding: 8px 16px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;

  .icon {
    margin-right: 8px;
  }

  .input {
    width: 100%;
    padding: 0 8px;
  }
`;