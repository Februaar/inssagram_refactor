import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import * as SC from "@/styles/styled/story";
import { noProfile } from "@/images/index";

const StoryItem = () => {
  const user: UserState = useSelector((state: RootState) => state.user);

  return (
    <>
      <SC.Container>
        <SC.Item>
          <SC.Profile>
            <Image
              src={user.image ? user.image : noProfile}
              alt="profile"
              width={56}
              height={56}
              style={{ borderRadius: "100%" }}
            />
          </SC.Profile>
          <SC.Account>내 스토리</SC.Account>
        </SC.Item>
      </SC.Container>
    </>
  );
};

export default StoryItem;
