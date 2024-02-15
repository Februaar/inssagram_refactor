import { useState, useEffect } from "react";
import { SearchResultData, SearchHistoryData } from "@/types/SearchTypes";
import { RecommendationsData } from "@/types/UserTypes";
import postSearchValue from "@/services/searchInfo/postSearchValue";
import deleteSearchHistory from "@/services/searchInfo/deleteSearchHistory";
import getSearchResultList from "@/services/searchInfo/getSearchResultList";
import getSearchHistoryList from "@/services/searchInfo/getSearchHistoryList";
import getRecommendations from "@/services/userInfo/getRecommendations";
import styled from "styled-components";
import SearchInput from "@/components/Inputs/Search";
import SearchItem from "@/components/Items/Search";
import RecommendItem from "@/components/Items/Recommend";
import HistoryItem from "@/components/Items/History";
import Footer from "@/components/Footer";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResultData[]>([]);
  const [searchHistories, setSearchHistories] = useState<SearchHistoryData[]>(
    []
  );
  const [recommends, setRecommends] = useState<RecommendationsData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue) {
        await fetchSearchResultList(searchValue);
      } else {
        setSearchResults([]);
      }
      await fetchSearchHistoryList();
      await fetchRecommendationsList(0, 5);
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

  const fetchRecommendationsList = async (
    pageNumber: number,
    pageSize: number
  ) => {
    try {
      const res = await getRecommendations(pageNumber, pageSize);
      setRecommends(res.data.content);
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

  const handlePostSearchValue = async (memberId: string) => {
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
    <section>
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

      {!searchResults.length && !searchHistories.length
        ? ""
        : searchResults.length === 0 && (
            <TabTitle>
              <div>최근 검색어</div>
              <button>모두 지우기</button>
            </TabTitle>
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

      {/* 추천 계정 리스트 */}
      <TabTitle>
        <div>최근에 가입했어요</div>
      </TabTitle>
      {recommends.length > 0 &&
        recommends.map((recommend) => (
          <RecommendItem key={recommend.member_id} account={recommend} />
        ))}
      <Footer />
    </section>
  );
};

export default SearchPage;

const TabTitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  padding: 14px 16px 12px;
  border-top: 1px solid #dbdbdb;

  div {
    font-size: 16px;
    font-weight: 600;
  }

  button {
    display: flex;
    justify-content: flex-end;
    color: #92a8d1;
  }
`;
