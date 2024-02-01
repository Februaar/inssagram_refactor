import { PostContentData } from "@/types/PostTypes";
import Image from "next/image";
import { brokenImage } from "@/images/index";
import styled from "styled-components";

interface PostItemProps {
  image: PostContentData[] | undefined;
}

const PostImage: React.FC<PostItemProps> = ({ image }) => {
  return (
    <>
      <PostImgContainer>
        <Image
          src={image ? image[0] : brokenImage}
          alt="broken-image"
          width={375}
          height={375}
        />
      </PostImgContainer>
    </>
  );
};

export default PostImage;

const PostImgContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  height: 375px;
`;
