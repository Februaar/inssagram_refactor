import { useState } from "react";
import { OriginalCommentData, CommentData } from "@/types/PostTypes";
import * as SC from "@/styles/styled/containers_comment";
import OriginalItem from "@/components/Items/Original";
import CommentItem from "@/components/Items/Comment";
import CommentInput from "@/components/Inputs/Comment";

interface CommentContainerProps {
  original: OriginalCommentData | undefined;
  comments: CommentData[] | undefined;
}

const CommentContainer: React.FC<CommentContainerProps> = ({
  original,
  comments,
}) => {

  return (
    <>
      <SC.Container>
        <SC.DetailArea>
          <SC.ContentsArea>
            {original && <OriginalItem original={original} />}
            <SC.CommentArea>
              {comments &&
                comments.map((comment, index) => (
                  <CommentItem key={index} comment={comment} />
                ))}
            </SC.CommentArea>
          </SC.ContentsArea>
          {original && (
            <CommentInput
              postId={original.postId}
            />
          )}
        </SC.DetailArea>
      </SC.Container>
    </>
  );
};

export default CommentContainer;
