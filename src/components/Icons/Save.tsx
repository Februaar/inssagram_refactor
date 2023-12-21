import Image from "next/image";
import { bookmark } from "@/images/index";
import * as SC from "@/styles/styled/containers_icon_container";

const SaveIcon = () => {
  return (
    <>
      <SC.SaveIcon>
        <Image src={bookmark} alt="profile" width={24} height={24} />
      </SC.SaveIcon>
    </>
  );
};

export default SaveIcon;
