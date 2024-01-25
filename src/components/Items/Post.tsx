import { PostContentData } from "@/types/PostTypes";
import PostTop from "../atoms/Top";
import PostImage from "../atoms/Image";
import PostContent from "../atoms/Content";

interface PostItemProps {
  post: PostContentData | undefined | any;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <>
      <PostTop writer={post} />
      <PostImage image={post.image} />
      <PostContent content={post} />
    </>
  );
};

export default PostItem;
