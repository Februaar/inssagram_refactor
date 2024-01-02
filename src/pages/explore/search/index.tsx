import { useState, useEffect } from "react";
import { useSearch } from "@/context/Search";
import { SearchResultData } from "@/types/SearchTypes";
import postSearchValue from "@/services/searchInfo/postSearchValue";
import deleteSearchHistory from "@/services/searchInfo/deleteSearchHistory";
import getSearchResultList from "@/services/searchInfo/getSearchResultList";
import getSearchHistoryList from "@/services/searchInfo/getSearchHistoryList";
import * as SC from "@/styles/styled/search";
import Error from "@/components/atoms/Error";
import SearchInput from "@/components/Inputs/Search";
import SearchItem from "@/components/Items/Search";
import HistoryItem from "@/components/Items/History";
import Footer from "@/components/Footer";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResultData[]>([]);
  const { searchHistories, setSearchHistories } = useSearch();

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue) {
        await fetchSearchResultList(searchValue);
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
      console.log("삭제 요청 전:", searchHistories);

      await deleteSearchHistory(searched);

      console.log("삭제 요청 후:", searchHistories);

      const updatedHistories = await getSearchHistoryList();
      setSearchHistories(updatedHistories);

      console.log("업데이트 후:", searchHistories);
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
            result={result}
            onClick={handlePostSearchValue}
          />
        ))}

      {!searchResults.length && !searchHistories.length ? (
        <Error message="최근 검색 기록이 없습니다" />
      ) : (
        searchResults.length === 0 && (
          <SC.HeadTitle>
            <SC.SubTitle>최근 검색어</SC.SubTitle>
            <SC.DeleteAll>모두 지우기</SC.DeleteAll>
          </SC.HeadTitle>
        )
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
