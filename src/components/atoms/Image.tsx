import Image from "next/image";
import { brokenImage } from "@/images/index";
import * as SC from "@/styles/styled/atoms_image";

const PostImage = () => {
  return (
    <>
      <SC.Container>
        <Image src={brokenImage} alt="broken-image" width={56} height={56} />
      </SC.Container>
    </>
  );
};

export default PostImage;
