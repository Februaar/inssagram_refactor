import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeComment } from "@/redux/commentSlice";
import { CommentData } from "@/types/PostTypes";
import { formatData } from "@/utils/date";
import * as SC from "@/styles/styled/items_comment";
import { noProfile, favorite, moreHoriz } from "@/images";
import DeleteModal from "@/components/Modals/Delete";
import deleteComment from "@/services/postInfo/deleteComment";

interface CommentItemProps {
  comment: CommentData;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const user = useSelector((state: RootState) => state.user);
  const isCurrentUser = user.member_id === comment.memberId;

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedCreatedAt = formatData(new Date(comment.createdAt));

  const handleDeleteComment = async (commentId: number) => {
    try {
      await deleteComment(commentId);
      dispatch(removeComment(commentId));
      setIsModalOpen(false);
    } catch (err) {
      console.error("error deleting comment");
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {comment && (
        <CommentContainer>
          <div role="button" className="item-container">
            <div className="contents-area">
              <Link
                href={`/${comment.memberId}`}
                style={{ display: "inline", margin: "0" }}
              >
                <div role="button" className="profile">
                  <Image
                    src={comment.memberImage ? comment.memberImage : noProfile}
                    alt="profile-image"
                    width={32}
                    height={32}
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </Link>
              <div className="comment-area">
                <div className="comment-details">
                  <Link
                    href={`/${comment.memberId}`}
                    style={{ display: "inline", margin: "0" }}
                  >
                    <div className="nickname">
                      <div>
                        <span>{comment.nickname}</span>
                      </div>
                    </div>
                  </Link>
                  <span className="divide">&nbsp;</span>
                  <span className="comment">{comment.content}</span>
                </div>
                <div className="other-details">
                  <span>{formattedCreatedAt}</span>
                  {comment.likeCount !== 0 && (
                    <span>좋아요 {comment.likeCount}개</span>
                  )}
                  <span>답글달기</span>
                  {isCurrentUser ? (
                    <span onClick={handleOpenModal} className="modal-button">
                      <Image
                        src={moreHoriz}
                        alt="delete-button"
                        width={24}
                        height={24}
                      />
                    </span>
                  ) : null}
                  {isModalOpen ? (
                    <DeleteModal
                      onDelete={() => handleDeleteComment(comment.commentId)}
                      handleClose={handleCloseModal}
                    />
                  ) : null}
                </div>
              </div>
              <div className="like-button">
                <span style={{ paddingBottom: "8px" }}>
                  <Image src={favorite} alt="favorite" width={12} height={12} />
                </span>
              </div>
            </div>
            {comment.commentCount !== 0 && (
              <div className="reply-comment">
                답글 {comment.commentCount}개 모두 보기
              </div>
            )}
          </div>
        </CommentContainer>
      )}
    </>
  );
};

export default CommentItem;

import styled from "styled-components";

const CommentContainer = styled.div`
  position: static;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-self: auto;
  overflow-y: visible;
  overflow-x: visible;
  min-height: 62px;

  .item-container {
    padding-left: 8px;

    .contents-area {
      position: static;
      display: flex;
      flex-shrink: 0;
      flex-direction: row;
      align-items: stretch;
      justify-content: flex-start;
      align-self: auto;
      padding: 12px 0;

      .profile {
        cursor: pointer;
        margin-right: 8px;
      }

      .comment-area {
        position: static;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        align-self: auto;
        min-width: 0;
        min-height: 0;

        .comment-details {
          position: relative;
          display: block;
          flex-shrink: 0;
          align-items: stretch;
          vertical-align: baseline;
          overflow-y: visible;
          overflow-x: visible;
          min-width: 0;
          min-height: 0;

          .nickname {
            position: static;
            display: inline-block;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
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
                margin: 0;
                text-align: inherit;
                font-weight: 600;
              }
            }
          }

          .divide {
            display: inline;
            margin: 0 !important;
            font-weight: 400;
          }

          .comment {
            display: inline !important;
            margin: 0 !important;
            font-weight: 400;
          }
        }

        .other-details {
          position: static;
          display: flex;
          flex-shrink: 0;
          flex-grow: 0;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          align-self: auto;
          height: 16px;
          margin-top: 4px;
          gap: 8px;

          .modal-button {
            display: none;
          }
        }

        .other-details:hover .modal-button {
          display: inline;
        }
      }

      .like-button {
        position: static;
        display: flex;
        flex-grow: 0;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
      }
    }

    .reply-comment {
      position: static;
      display: flex;
      flex-shrink: 0;
      flex-direction: row;
      align-items: stretch;
      justify-content: flex-start;
      align-self: auto;
      margin-left: 40px;
    }
  }
`;
