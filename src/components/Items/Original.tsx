import Image from "next/image";
import Link from "next/link";
import * as SC from "@/styles/styled/items_original";
import { noProfile } from "@/images/index";

const OriginalItem = () => {
  return (
    <>
      <SC.OriginalContainer>
        <SC.Profile role="button">
          <Link href="" style={{ width: "32", height: "32" }}>
            <Image
              src={noProfile}
              alt="profile-image"
              object-fit="cover"
              width={32}
              height={32}
            />
          </Link>
        </SC.Profile>
        <SC.CommentArea>
          <SC.Comment>
            <div style={{ display: "block" }}>
              <SC.Details>
                <Link href="" style={{ display: "inline", margin: "0" }}>
                  <SC.Nickname>
                    <SC.Div>
                      <SC.Span>지니쥐니</SC.Span>
                    </SC.Div>
                  </SC.Nickname>
                </Link>
                <SC.Divi>&nbsp;</SC.Divi>
                <SC.Content>커피 수혈이 필요한데</SC.Content>
              </SC.Details>
            </div>
            <SC.Time>5주</SC.Time>
          </SC.Comment>
        </SC.CommentArea>
      </SC.OriginalContainer>
      <SC.Stroke />
    </>
  );
};

export default OriginalItem;
