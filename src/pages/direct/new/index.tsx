import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import { SearchResultData } from "@/types/SearchTypes";
import { DirectNewPageHeader } from "@/components/atoms/Header";
import DirectSearchInput from "@/components/Inputs/Direct";
import DirectListContainer from "@/components/Containers/DirectList";
import Error from "@/components/atoms/Error";
import postNewChatRoom from "@/services/directInfo/postNewChatRoom";
import getSearchResultList from "@/services/searchInfo/getSearchResultList";

const DirectNewPage = () => {
  const pageTitle = "새로운 메시지";
  const user: UserState = useSelector((state: RootState) => state.user);
  const router = useRouter();

  const [searched, setSearched] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResultData[]>([]);
  const [selectedAccount, setSelectedAccount] =
    useState<SearchResultData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (searched) {
        await fetchSearchResultList(searched);
      }
    };

    fetchData();
  }, [searched]);

  const fetchSearchResultList = async (searched: string) => {
    try {
      const res = await getSearchResultList(searched);
      setSearchResults(res);
    } catch (err) {
      console.error("error fetching search results:", err);
    }
  };

  const handleCreateNewRoom = async () => {
    if (user && selectedAccount) {
      const first = user.member_id;
      const second = selectedAccount.memberId;

      if (first === second) {
        console.error("You cannot create a chat room with yourself.");
        alert("대화를 나누고 싶은 상대를 찾아보세요 :)");
        return;
      }

      try {
        const res = await postNewChatRoom(first, second);
        console.log(typeof res.chatRoomId);
        router.push(`/direct/${res.chatRoomId}`);
      } catch (err) {
        console.error("error creating new chat room:", err);
      }
    }
  };

  const handleSearchAccount = (searchValue: string) => {
    setSearched(searchValue);
  };

  const handleSelectAccount = (selectedAccount: SearchResultData) => {
    setSelectedAccount(selectedAccount);
  };

  return (
    <>
      <DirectNewPageHeader title={pageTitle} onClick={handleCreateNewRoom} />
      <DirectSearchInput
        onSearch={handleSearchAccount}
        selectedAccount={selectedAccount}
      />
      {searchResults && searchResults.length > 0 ? (
        <DirectListContainer
          results={searchResults}
          onClick={handleSelectAccount}
        />
      ) : (
        <Error message="검색 결과가 없습니다" />
      )}
    </>
  );
};

export default DirectNewPage;
