import { PostContentData } from "@/types/PostTypes";
import Link from "next/link";
import Image from "next/image";
import { noProfile, moreHoriz } from "@/images/index";
import * as SC from "@/styles/styled/atoms_top";

interface PostItemProps {
  writer: PostContentData | undefined;
}

const PostTop: React.FC<PostItemProps> = ({ writer }) => {
  return (
    <>
      {writer ? (
        <SC.Container>
          <Link href={`/${writer.memberId}`}>
            <SC.Account>
              <SC.Profile>
                <Image
                  src={writer.memberImage ? writer.memberImage : noProfile}
                  alt="profile"
                  width={32}
                  height={32}
                />
              </SC.Profile>
              <SC.Id>{writer.nickName}</SC.Id>
            </SC.Account>
          </Link>
          <SC.More>
            <Image src={moreHoriz} alt="profile" width={24} height={24} />
          </SC.More>
        </SC.Container>
      ) : (
        ""
      )}
    </>
  );
};

export default PostTop;
