import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addComment } from "@/redux/commentSlice";
import { UserState } from "@/types/UserTypes";
import styled from "styled-components";
import { noProfile } from "@/images";
import postNewComment from "@/services/postInfo/postNewComment";

interface CommentInputProps {
  postId: number;
}

const CommentInput: React.FC<CommentInputProps> = ({ postId }) => {
  const user: UserState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [newComment, setNewComment] = useState<string>("");
  const isEmpty = newComment.trim() === "";

  const handleCommentSubmit = async (postId: number, contents: string) => {
    try {
      const res = await postNewComment(postId, contents);
      const newCommentData = res.data;
      dispatch(addComment(newCommentData));
      setNewComment("");
    } catch (err) {
      console.error("error submitting comment:", err);
    }
  };

  return (
    <InputContainer>
      <div className="container">
        <div className="profile">
          <Image
            src={
              user.image
                ? user.image
                : user.profilePic
                ? user.profilePic
                : noProfile
            }
            alt="profile-image"
            width={32}
            height={32}
            style={{ borderRadius: "100%" }}
          />
        </div>
        <form>
          <div className="input-area">
            <textarea
              className="text-area"
              value={newComment}
              aria-label="댓글 달기..."
              placeholder="댓글 달기..."
              onChange={(e) => setNewComment(e.target.value)}
            />
            {isEmpty ? null : (
              <span
                className="submit"
                onClick={() => handleCommentSubmit(postId, newComment)}
              >
                게시
              </span>
            )}
          </div>
        </form>
      </div>
    </InputContainer>
  );
};

export default CommentInput;

const InputContainer = styled.div`
  position: fixed;
  bottom: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 80px;
  padding: 8px;
  border-top: 1px solid #dbdbdb;
  z-index: 5;

  .container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    .profile {
      position: relative;
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      margin-right: 5px;
      background-color: transparent;
    }

    form {
      flex-grow: 1;
      flex-shrink: 1;
      display: flex;
      flex-direction: row;
      padding: 8px;
      border: 1px solid #dbdbdb;
      border-radius: 38px;

      .input-area {
        flex-grow: 1;
        flex-shrink: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        vertical-align: baseline;

        .text-area {
          flex-grow: 1;
          display: flex;
          resize: none;
          width: 0;
          height: 18px !important;
          max-height: 80px;
        }

        .submit {
          display: flex;
          align-items: center;
          min-width: 28px;
          height: 18px;
          color: #92a8d1;
          margin-left: 8px;
          cursor: pointer;
        }
      }
    }
  }
`;
