import { DirectNewPageHeader } from "@/components/atoms/Header";
import DirectSearchInput from "@/components/Inputs/Direct";

const DirectNewPage = () => {
  const pageTitle = "새로운 메시지";

  return (
    <>
      <DirectNewPageHeader
        title={pageTitle}
        // handleNewChatRoom={handleNewChatRoom}
      />
      <DirectSearchInput />
    </>
  );
};

export default DirectNewPage;
