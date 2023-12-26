import { PostContentData } from "@/types/PostTypes";
import Image from "next/image";
import styled from "styled-components";
import { brokenImage } from "@/images/index";

interface PostContainerProps {
  post: PostContentData | undefined;
}

const PostView: React.FC<PostContainerProps> = ({ post }) => {
  return (
    <>
      <PreView>
        {post && (
          <Image
            src={post.image ? post.image : brokenImage}
            alt="broken-image"
          />
        )}
      </PreView>
    </>
  );
};

export default PostView;

const PreView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 140px;
  height: 140px;
  border: 1px solid #dbdbdb;
`;
