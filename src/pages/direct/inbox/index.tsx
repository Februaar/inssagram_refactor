import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import { DirectPageHeader } from "@/components/atoms/Header";

const DirectInboxPage = () => {
  const user: UserState = useSelector((state: RootState) => state.user);

  return (
    <>
      <DirectPageHeader title={user.nickname} />
    </>
  );
};

export default DirectInboxPage;
