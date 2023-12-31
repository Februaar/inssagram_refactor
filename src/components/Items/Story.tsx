import Image from "next/image";
import * as SC from "@/styles/styled/story";
import { noProfile } from "@/images/index";

const StoryItem = () => {
  return (
    <>
      <SC.Container>
        <SC.Item>
          <SC.Profile>
            <Image src={noProfile} alt="profile" width={56} height={56} />
          </SC.Profile>
          <SC.Account>경진</SC.Account>
        </SC.Item>
      </SC.Container>
    </>
  );
};

export default StoryItem;
