import Image from "next/image";
import { favorite } from "@/images/index";
import * as SC from "@/styles/styled/containers_icon_container";

const FavoriteIcon = () => {
  return (
    <>
      <SC.Icon>
        <Image src={favorite} alt="profile" width={24} height={24} />
      </SC.Icon>
    </>
  );
};

export default FavoriteIcon;
