import Link from "next/link";
import { PostContentData } from "@/types/PostTypes";
import { formatData } from "@/utils/date";
import styled from "styled-components";
import PostIconContainer from "../Containers/PostIcon";

interface PostItemProps {
  content: PostContentData;
}

const PostContent: React.FC<PostItemProps> = ({ content }) => {
  const formattedCreatedAt = formatData(new Date(content.createdAt));

  return (
    <>
      {content && (
        <PostContentContainer>
          <PostIconContainer post={content} />
          <div className="favorite-area">
            <Link href={`/post/${content.postId}/liked_by`}>
              {content.likeCount !== 0
                ? content.likeCount + "명이 좋아합니다"
                : "좋아요를 눌러보세요"}
            </Link>
          </div>
          <div className="comment-area">
            <div className="original-comment">{content.contents}</div>
            <div className="comments">
              <Link href={`/post/${content.postId}/comments`}>
                댓글 {content.commentsCounts}개 모두 보기
              </Link>
            </div>
          </div>
          <div className="created-at">{formattedCreatedAt}</div>
        </PostContentContainer>
      )}
    </>
  );
};

export default PostContent;

const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 147px;
  padding: 0 16px;

  .favorite-area {
    position: relative;
    display: flex;
    height: 18px;
    margin-bottom: 8px;
  }

  .comment-area {
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;

    .original-comment {
      height: 14px;
      margin-bottom: 6px;
    }

    .comments {
      color: #737373;
      margin-bottom: 4px;
    }
  }

  .created-at {
    font-size: 12px;
    color: #737373;
    margin-bottom: 8px;
  }
`;
