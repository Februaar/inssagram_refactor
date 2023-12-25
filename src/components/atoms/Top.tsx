import Link from "next/link";
import Image from "next/image";
import { noProfile, moreHoriz } from "@/images/index";
import * as SC from "@/styles/styled/atoms_top";

const PostTop = () => {
  
  return (
    <>
      <SC.Container>
        <Link href="/[nickname]">
          <SC.Account>
            <SC.Profile>
              <Image src={noProfile} alt="profile" width={32} height={32} />
            </SC.Profile>
            <SC.Id>jinnie__</SC.Id>
          </SC.Account>
        </Link>
        <SC.More>
          <Image src={moreHoriz} alt="profile" width={24} height={24} />
        </SC.More>
      </SC.Container>
    </>
  );
};

export default PostTop;
