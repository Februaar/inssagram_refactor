import Link from "next/link";
import Image from "next/image";
import * as SC from "@/styles/styled/containers_icon_container";
import { comment, direct } from "@/images/index";
import Favorite from "../Icons/Favorite";
import Save from "../Icons/Save";

const PostIconContainer = () => {
  return (
    <>
      <SC.Container>
        <Favorite />
        <SC.Icon>
          <Link href="/post/[id]/comments">
            <Image src={comment} alt="profile" width={24} height={24} />
          </Link>
        </SC.Icon>
        <SC.Icon>
          <Link href="/direct/new">
            <Image src={direct} alt="profile" width={24} height={24} />
          </Link>
        </SC.Icon>
        <Save />
      </SC.Container>
    </>
  );
};

export default PostIconContainer;
