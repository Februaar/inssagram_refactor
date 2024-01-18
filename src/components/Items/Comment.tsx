import Link from "next/link";
import Image from "next/image";
import * as SC from "@/styles/styled/items_comment";
import { noProfile, favorite } from "@/images/index";

const CommentItem = () => {
  return (
    <SC.CommentContainer>
      <SC.ItemArea role="button">
        <SC.ContentsArea>
          <SC.Profile role="button" style={{ cursor: "pointer" }}>
            <Image src={noProfile} alt="profile-image" width={32} height={32} />
          </SC.Profile>
          <SC.CommentArea>
            <SC.Comment>
              <Link href="" style={{ display: "inline", margin: "0" }}>
                <SC.Nickname>
                  <SC.Div>
                    <SC.Span>지니쥐니</SC.Span>
                  </SC.Div>
                </SC.Nickname>
              </Link>
              <SC.Divi>&nbsp;</SC.Divi>
              <SC.Content>
                커피 수혈이 필요한데커피 수혈이 필요한데커피 수혈이 필요한데
              </SC.Content>
            </SC.Comment>
            <SC.Details>
              <span>5주</span>
              <span>좋아요 37개</span>
              <span>답글달기</span>
            </SC.Details>
          </SC.CommentArea>
          <SC.Like>
            <span style={{ paddingBottom: "8px" }}>
              <Image src={favorite} alt="favorite" width={12} height={12} />
            </span>
          </SC.Like>
        </SC.ContentsArea>
        <SC.ReplyArea>답글 2개 모두 보기</SC.ReplyArea>
      </SC.ItemArea>
    </SC.CommentContainer>
  );
};

export default CommentItem;
