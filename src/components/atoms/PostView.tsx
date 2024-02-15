import Link from "next/link";
import Image from "next/image";
import { PostContentData } from "@/types/PostTypes";
import styled from "styled-components";
import { brokenImage } from "@/images";

interface PostContainerProps {
  posts: PostContentData[] | undefined;
}

const PostView: React.FC<PostContainerProps> = ({ posts }) => {
  return (
    <ViewContainer>
      {posts &&
        posts.map((post) => (
          <Link href={`/post/${post.postId}`} key={post.postId}>
            <div>
              <Image
                src={post.image ? post.image[0] : brokenImage}
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
        ))}
    </ViewContainer>
  );
};

export default PostView;

const ViewContainer = styled.article`
  position: relative;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  width: 100%;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    width: 123px;
    height: 123px;
    border: 1px solid #dbdbdb;
  }
`;
