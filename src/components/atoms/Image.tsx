import { PostContentData } from "@/types/PostTypes";
import Image from "next/image";
import { brokenImage } from "@/images/index";
import * as SC from "@/styles/styled/atoms_image";

interface PostItemProps {
  image: PostContentData[] | undefined;
}

const PostImage: React.FC<PostItemProps> = ({ image }) => {
  return (
    <>
      <SC.Container>
        <Image
          src={image ? image[0] : brokenImage}
          alt="broken-image"
          width={430}
          height={430}
        />
      </SC.Container>
    </>
  );
};

export default PostImage;
