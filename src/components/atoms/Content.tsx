import Link from "next/link";
import { PostContentData } from "@/types/PostTypes";
import * as SC from "@/styles/styled/atoms_content";
import PostIconContainer from "../Containers/PostIcon";

interface PostItemProps {
  content: PostContentData | undefined;
}

const PostContent: React.FC<PostItemProps> = ({ content }) => {
  return (
    <>
      {content && (
        <SC.Container>
          <PostIconContainer post={content} />
          <SC.FavoriteContainer>
            <Link href={`/post/${content.postId}/liked_by`}>
              {content.likeCount !== 0
                ? content.likeCount + "명이 좋아합니다"
                : "좋아요를 눌러보세요"}
            </Link>
          </SC.FavoriteContainer>
          <SC.CommentContainer>
            <SC.OriginalComment>{content.contents}</SC.OriginalComment>
            <SC.MoreComments>
              <Link href={`/post/${content.postId}/comments`}>
                댓글 {content.commentsCounts}개 모두 보기
              </Link>
            </SC.MoreComments>
          </SC.CommentContainer>
          <SC.CreatedAt>{content.createdAt}</SC.CreatedAt>
        </SC.Container>
      )}
    </>
  );
};

export default PostContent;
