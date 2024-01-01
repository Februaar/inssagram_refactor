import { useState, useEffect } from "react";
import getSearchResultList from "@/services/searchInfo/getSearchResultList";
import getSearchHistoryList from "@/services/searchInfo/getSearchHistoryList";
import SearchInput from "@/components/Inputs/Search";
import SearchItem from "@/components/Items/Search";
import HistoryItem from "@/components/Items/History";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [searchHistories, setSearchHistories] = useState("");
  console.log(searchTerm);
  console.log(searchResults);
  console.log(searchHistories);

  useEffect(() => {
    const fetchSearchResultList = async (searchTerm: string) => {
      try {
        const res = await getSearchResultList(searchTerm);
        setSearchResults(res);
      } catch (err) {
        console.error("error fetching search results:", err);
      }
    };
    
    const fetchSearchHistoryList = async () => {
      try {
        const res = await getSearchHistoryList();
        setSearchHistories(res);
      } catch (err) {
        console.error("error fetching search histories:", err);
      }
    };

    if(searchTerm) {
      fetchSearchResultList(searchTerm);
    }
    fetchSearchHistoryList();

  }, [searchTerm])


  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
  };

  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <SearchItem />
      <HistoryItem />
    </>
  );
};

export default SearchPage;
