import * as SC from "@/styles/styled/atoms_content";
import PostIconContainer from "../Containers/PostIcon";

const PostContent = () => {
  return (
    <>
      <SC.Container>
        <PostIconContainer />
        <SC.FavoriteContainer>경진님 여러명이 좋아합니다</SC.FavoriteContainer>
        <SC.CommentContainer>
          <SC.OriginalComment>Jinnie 생각보다 어렵구나</SC.OriginalComment>
          <SC.MoreComments>댓글 37개 모두 보기</SC.MoreComments>
        </SC.CommentContainer>
        <SC.CreatedAt>2시간</SC.CreatedAt>
      </SC.Container>
    </>
  );
};

export default PostContent;
