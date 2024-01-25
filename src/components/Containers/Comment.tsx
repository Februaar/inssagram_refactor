import { useState, useEffect } from "react";
import { OriginalCommentData } from "@/types/PostTypes";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "@/redux/commentSlice";
import { RootState } from "@/redux/store";
import * as SC from "@/styles/styled/containers_comment";
import OriginalItem from "@/components/Items/Original";
import CommentItem from "@/components/Items/Comment";
import CommentInput from "@/components/Inputs/Comment";
import getCommentAll from "@/services/postInfo/getCommentAll";
import getPostDetail from "@/services/postInfo/getPostDetail";

interface CommentContainerProps {
  postId: number;
}

const CommentContainer: React.FC<CommentContainerProps> = ({ postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comment.comments);

  const [original, setOriginal] = useState<OriginalCommentData | undefined>();

  const fetchOriginalData = async (postId: number) => {
    try {
      const res = await getPostDetail(postId);
      setOriginal(res.data);
    } catch (err) {
      console.error("error fetching original comment data:", err);
    }
  };

  const fetchCommentAllData = async (postId: number) => {
    try {
      const res = await getCommentAll(postId);
      dispatch(setComments(res.data));
    } catch (err) {
      console.error("error fetching comments data:", err);
    }
  };

  useEffect(() => {
    if (postId !== -1) {
      fetchOriginalData(postId);
      fetchCommentAllData(postId);
    }
  }, [postId]);

  return (
    <>
      <SC.Container>
        <SC.DetailArea>
          <SC.ContentsArea>
            {original && <OriginalItem original={original} />}
            <SC.CommentArea>
              {comments ? (
                comments.map((comment, index) => (
                  <CommentItem key={index} comment={comment} />
                ))
              ) : (
                <div>아직 댓글이 없습니다.</div>
              )}
            </SC.CommentArea>
          </SC.ContentsArea>
          {original && <CommentInput postId={original.postId} />}
        </SC.DetailArea>
      </SC.Container>
    </>
  );
};

export default CommentContainer;
