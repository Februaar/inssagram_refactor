import { useState, useEffect } from "react";
import { SearchResultData, SearchHistoryData } from "@/types/SearchTypes";
import postSearchValue from "@/services/searchInfo/postSearchValue";
import deleteSearchHistory from "@/services/searchInfo/deleteSearchHistory";
import getSearchResultList from "@/services/searchInfo/getSearchResultList";
import getSearchHistoryList from "@/services/searchInfo/getSearchHistoryList";
import * as SC from "@/styles/styled/search";
import SearchInput from "@/components/Inputs/Search";
import SearchItem from "@/components/Items/Search";
import HistoryItem from "@/components/Items/History";
import Footer from "@/components/Footer";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResultData[]>([]);
  const [searchHistories, setSearchHistories] = useState<SearchHistoryData[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue) {
        await fetchSearchResultList(searchValue);
      } else {
        setSearchResults([]);
      }
      await fetchSearchHistoryList();
    };

    fetchData();
  }, [searchValue]);

  const fetchSearchResultList = async (searchValue: string) => {
    try {
      const res = await getSearchResultList(searchValue);
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

  const handlePostSearchValue = async (memberId: number) => {
    try {
      await postSearchValue(memberId);
    } catch (err) {
      console.error("error posting search value:", err);
    }
  };

  const handleDeleteSearchHistory = async (searched: string) => {
    try {
      await deleteSearchHistory(searched);

      setSearchHistories((prevHistories) =>
        prevHistories.filter((history) => history.searched !== searched)
      );
    } catch (err) {
      console.error("error deleting search history:", err);
    }
  };

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  return (
    <>
      <SearchInput onSearch={handleSearch} />

      {/* 검색 결과 */}
      {searchResults.length > 0 &&
        searchResults.map((result) => (
          <SearchItem
            key={result.memberId}
            member={result}
            onClick={handlePostSearchValue}
          />
        ))}

      {!searchResults.length && !searchHistories.length
        ? ""
        : searchResults.length === 0 && (
            <SC.HeadTitle>
              <SC.SubTitle>최근 검색어</SC.SubTitle>
              <SC.DeleteAll>모두 지우기</SC.DeleteAll>
            </SC.HeadTitle>
          )}

      {/* 최근 검색 기록 */}
      {searchHistories.length > 0 &&
        !searchValue &&
        searchHistories.map((history) => (
          <HistoryItem
            key={history.memberId}
            history={history}
            onDelete={handleDeleteSearchHistory}
          />
        ))}

      <Footer />
    </>
  );
};

export default SearchPage;
