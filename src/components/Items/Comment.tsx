import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeComment } from "@/redux/commentSlice";
import { CommentData } from "@/types/PostTypes";
import * as SC from "@/styles/styled/items_comment";
import { noProfile, favorite, moreHoriz } from "@/images/index";
import CommentModal from "@/components/Modals/Comment";
import deleteComment from "@/services/postInfo/deleteComment";

interface CommentItemProps {
  comment: CommentData;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <SC.CommentContainer>
      <SC.ItemArea role="button">
        <SC.ContentsArea>
          <Link
            href={`/${comment.memberId}`}
            style={{ display: "inline", margin: "0" }}
          >
            <SC.Profile role="button">
              <Image
                src={comment.memberImage ? comment.memberImage : noProfile}
                alt="profile-image"
                width={32}
                height={32}
              />
            </SC.Profile>
          </Link>
          <SC.CommentArea>
            <SC.Comment>
              <Link
                href={`/${comment.memberId}`}
                style={{ display: "inline", margin: "0" }}
              >
                <SC.Nickname>
                  <SC.Div>
                    <SC.Span>{comment.nickname}</SC.Span>
                  </SC.Div>
                </SC.Nickname>
              </Link>
              <SC.Divi>&nbsp;</SC.Divi>
              <SC.Content>{comment.content}</SC.Content>
            </SC.Comment>
            <SC.Details>
              <span>{comment.createdAt}</span>
              {comment.likeCount !== 0 && (
                <span>좋아요 {comment.likeCount}개</span>
              )}
              <SC.ReplyBtn>답글달기</SC.ReplyBtn>
              <SC.Option onClick={handleOpenModal}>
                <Image src={moreHoriz} alt="option" />
              </SC.Option>
              {isModalOpen ? (
                <CommentModal
                  onDelete={() => handleDeleteComment(comment.commentId)}
                  handleClose={handleCloseModal}
                />
              ) : null}
            </SC.Details>
          </SC.CommentArea>
          <SC.Like>
            <span style={{ paddingBottom: "8px" }}>
              <Image src={favorite} alt="favorite" width={12} height={12} />
            </span>
          </SC.Like>
        </SC.ContentsArea>
        {comment.commentCount !== 0 && (
          <SC.ReplyArea>답글 {comment.commentCount}개 모두 보기</SC.ReplyArea>
        )}
      </SC.ItemArea>
    </SC.CommentContainer>
  );
};

export default CommentItem;
