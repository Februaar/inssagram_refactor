import { useState } from "react";
import getSearchResults from "@/services/searchInfo/getSearchResults";
import SearchInput from "@/components/Inputs/Search";
import SearchItem from "@/components/Items/Search";
import HistoryItem from "@/components/Items/History";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  console.log(searchResults);

  const fetchSearchResultData = async (keyword: string) => {
    try {
      const res = await getSearchResults(keyword);
      setSearchResults(res);
    } catch (err) {
      console.error("error fetching search results:", err);
    }
  };

  return (
    <>
      <SearchInput />
      <SearchItem />
      <HistoryItem />
    </>
  );
};

export default SearchPage;
