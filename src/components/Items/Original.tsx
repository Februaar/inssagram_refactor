import Image from "next/image";
import Link from "next/link";
import { OriginalCommentData } from "@/types/PostTypes";
import * as SC from "@/styles/styled/items_original";
import { noProfile } from "@/images/index";

interface OriginalItemProps {
  original: OriginalCommentData;
}

const OriginalItem: React.FC<OriginalItemProps> = ({ original }) => {
  return (
    <>
      <SC.OriginalContainer>
        <SC.Profile role="button">
          <Link
            href={`/${original.memberId}`}
            style={{ width: "32", height: "32" }}
          >
            <Image
              src={original.memberImage ? original.memberImage : noProfile}
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
                <Link
                  href={`/${original.memberId}`}
                  style={{ display: "inline", margin: "0" }}
                >
                  <SC.Nickname>
                    <SC.Div>
                      <SC.Span>{original.nickName}</SC.Span>
                    </SC.Div>
                  </SC.Nickname>
                </Link>
                <SC.Divi>&nbsp;</SC.Divi>
                <SC.Content>{original.contents}</SC.Content>
              </SC.Details>
            </div>
            <SC.Time>{original.createdAt}</SC.Time>
          </SC.Comment>
        </SC.CommentArea>
      </SC.OriginalContainer>
      <SC.Stroke />
    </>
  );
};

export default OriginalItem;
