import Link from "next/link";
import Image from "next/image";
import { PostContentData } from "@/types/PostTypes";
import { brokenImage } from "@/images/index";
import * as SC from "@/styles/styled/atoms_postview";

interface PostContainerProps {
  posts: PostContentData[] | undefined;
}

const PostView: React.FC<PostContainerProps> = ({ posts }) => {
  return (
    <>
      <SC.Article>
        {posts &&
          posts.map((post) => (
            <Link href={`/post/${post.postId}`} key={post.postId}>
              <SC.PreView>
                <Image
                  src={post.image ? post.image[0] : brokenImage}
                  alt="broken-image"
                  layout="fill"
                  objectFit="cover"
                />
              </SC.PreView>
            </Link>
          ))}
      </SC.Article>
    </>
  );
};

export default PostView;
