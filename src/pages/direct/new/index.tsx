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
    if (!user || !selectedAccount) return;

    const senderId = user.member_id;
    const receiverId = selectedAccount.memberId;

    if (senderId === receiverId) {
      alert("자기 자신과는 채팅할 수 없습니다.");
      return;
    }

    try {
      setIsLoading(true);
      const { chatRoomId } = await postNewChatRoom(senderId, receiverId);

      if (chatRoomId) {
        router.push(`/direct/${chatRoomId}`);
      } else {
        alert("채팅방 생성에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (err) {
      console.error("error creating new chat room:", err);
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchAccount = (searchValue: string) => {
    setSearched(searchValue);
  };

  const handleSelectAccount = (selectedAccount: SearchResultData) => {
    setSelectedAccount(selectedAccount);
  };

  return (
    <section>
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
    </section>
  );
};

export default DirectNewPage;
