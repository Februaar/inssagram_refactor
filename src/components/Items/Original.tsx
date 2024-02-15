import Image from "next/image";
import Link from "next/link";
import { OriginalCommentData } from "@/types/PostTypes";
import { formatData } from "@/utils/date";
import styled from "styled-components";
import { noProfile } from "@/images";

interface OriginalItemProps {
  original: OriginalCommentData;
}

const OriginalItem: React.FC<OriginalItemProps> = ({ original }) => {
  const formattedCreatedAt = formatData(new Date(original.createdAt));

  return (
    <>
      <ItemContainer>
        <div role="button" className="profile-area">
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
              style={{ borderRadius: "100%" }}
            />
          </Link>
        </div>
        <CommentArea>
          <div className="comment-area">
            <div style={{ display: "block" }}>
              <div className="comment-details">
                <Link
                  href={`/${original.memberId}`}
                  style={{ display: "inline", margin: "0" }}
                >
                  <div className="nickname-area">
                    <div>
                      <span>{original.nickName}</span>
                    </div>
                  </div>
                </Link>
                <span className="divide">&nbsp;</span>
                <span className="original">{original.contents}</span>
              </div>
            </div>
            <CreatedAt>{formattedCreatedAt}</CreatedAt>
          </div>
        </CommentArea>
      </ItemContainer>
      <Stroke />
    </>
  );
};

export default OriginalItem;

const ItemContainer = styled.div`
  position: static;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  padding: 12px 0;
  overflow-y: visible;
  overflow-x: visible;

  .profile-area {
    display: block;
    margin: 0 8px;
  }
`;

const CommentArea = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-self: auto;
  justify-content: flex-start;
  min-width: 0;
  min-height: 0;
  overflow-y: visible;
  overflow-x: visible;

  .comment-area {
    position: static;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    min-width: 0;
    min-height: 0;
    overflow-y: visible;
    overflow-x: visible;

    .comment-details {
      position: relative;
      display: block;
      min-width: 0;
      min-height: 0;
      overflow-y: visible;
      overflow-x: visible;

      .nickname-area {
        position: static;
        display: inline-block;
        overflow-y: visible;
        overflow-x: visible;

        div {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;

          span {
            display: inline;
            text-align: inherit;
            font-weight: 600;
            margin: 0;
          }
        }
      }

      .divide {
        display: inline;
        font-weight: 400;
        margin: 0 !important;
      }

      .original {
        display: inline !important;
        font-weight: 400;
        margin: 0 !important;
      }
    }
  }
`;

const CreatedAt = styled.div`
  position: static;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 16px;
  margin-top: 4px;
`;

const Stroke = styled.div`
  padding-top: 8px;
  margin: 0 16px 16px;
  border-bottom: 1px solid #dbdbdb;
`;
