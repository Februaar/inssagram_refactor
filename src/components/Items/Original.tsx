import Image from "next/image";
import * as SC from "@/styles/styled/items_original";
import { noProfile } from "@/images/index";

const OriginalItem = () => {
  return (
    <>
      <SC.OriginalContainer>
        <SC.CommentItem>
          <SC.ItemList>
            <SC.Profile role="button">
              <Image
                src={noProfile}
                alt="profile-image"
                width={32}
                height={32}
              />
            </SC.Profile>
            <SC.Content>
              <SC.Nickname>지니쥐니</SC.Nickname>
              <SC.Comment>커피 수혈이 필요한데</SC.Comment>
              <SC.Time>5주</SC.Time>
            </SC.Content>
          </SC.ItemList>
        </SC.CommentItem>
      </SC.OriginalContainer>
      <SC.Stroke />
    </>
  );
};

export default OriginalItem;
