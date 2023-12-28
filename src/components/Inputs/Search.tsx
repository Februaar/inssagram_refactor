import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { search } from "@/images/index";

const SearchInput = () => {
  return (
    <>
      <InputContainer>
        <SearchIcon>
          <Image src={search} alt="search-input" width={18} height={18} />
        </SearchIcon>
        <Link href="/explore/search">
          <Input type="text" placeholder="검색" />
        </Link>
      </InputContainer>
    </>
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
`;

const SearchIcon = styled.div`
  max-width: 18px;
  margin-right: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0 8px;
`;
