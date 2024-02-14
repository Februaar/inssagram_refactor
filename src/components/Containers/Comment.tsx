import { useState, useEffect } from "react";
import { OriginalCommentData } from "@/types/PostTypes";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "@/redux/commentSlice";
import { RootState } from "@/redux/store";
import styled from "styled-components";
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
    <Container>
      <div className="content-area">
        <div>
          {original && <OriginalItem original={original} />}
          <div className="comment-area">
            {comments ? (
              comments.map((comment, index) => (
                <CommentItem key={index} comment={comment} />
              ))
            ) : (
              <div>아직 댓글이 없습니다.</div>
            )}
          </div>
        </div>
        {original && <CommentInput postId={original.postId} />}
      </div>
    </Container>
  );
};

export default CommentContainer;

const Container = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  height: calc(100vh - 45px - 50px);
  overflow-y: visible;
  overflow-x: visible;

  .content-area {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;

      .comment-area {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
