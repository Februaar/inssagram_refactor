import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserState } from "@/types/UserTypes";
import styled from "styled-components";
import { noProfile } from "@/images";

const StoryItem = () => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const router = useRouter();

  const handleRouterClick = () => {
    router.push(`${user.member_id}`);
  };

  return (
    <ItemContainer>
      <div className="story-item">
        <div onClick={handleRouterClick}>
          <Image
            src={
              user.image
                ? user.image
                : user.profilePic
                ? user.profilePic
                : noProfile
            }
            alt="profile"
            width={56}
            height={56}
            style={{ borderRadius: "100%" }}
          />
        </div>
        <div className="nickname">내 스토리</div>
      </div>
    </ItemContainer>
  );
};

export default StoryItem;

const ItemContainer = styled.div`
  padding: 10px 8px;
  width: 100%;
  height: 105px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dbdbdb;

  .story-item {
    padding: 0 4px;
    width: 68px;
    height: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

    .nickname {
      font-size: 13px;
    }
  }
`;
