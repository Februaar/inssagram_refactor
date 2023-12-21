import styled from "styled-components";
import PostView from "../atoms/PostView";

const PostContainer = () => {
  return (
    <>
      <Article>
        <PostView />
        <PostView />
        <PostView />
      </Article>
    </>
  );
};

export default PostContainer;

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  width: 100%;
  height: 100%;
`;
