import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "@/redux/commentSlice";
import * as SC from "@/styles/styled/inputs_comment";
import { noProfile } from "@/images/index";
import postNewComment from "@/services/postInfo/postNewComment";

interface CommentInputProps {
  postId: number;
}

const CommentInput: React.FC<CommentInputProps> = ({ postId }) => {
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
    <SC.InputContainer>
      <SC.InputArea>
        <SC.MyProfile>
          <Image
            src={noProfile}
            alt="profile-image"
            width={32}
            height={32}
            style={{ borderRadius: "100%" }}
          />
        </SC.MyProfile>
        <SC.TextForm>
          <SC.TextArea>
            <SC.Text
              value={newComment}
              aria-label="댓글 달기..."
              placeholder="댓글 달기..."
              onChange={(e) => setNewComment(e.target.value)}
            />
            {isEmpty ? null : (
              <SC.Submit
                onClick={() => handleCommentSubmit(postId, newComment)}
              >
                게시
              </SC.Submit>
            )}
          </SC.TextArea>
        </SC.TextForm>
      </SC.InputArea>
    </SC.InputContainer>
  );
};

export default CommentInput;
