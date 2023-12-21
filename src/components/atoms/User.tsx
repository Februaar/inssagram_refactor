import Link from "next/link";
import Image from "next/image";
import { setting, accountAdd } from "@/images/index";
import * as SC from "@/styles/styled/atoms_user"

const UserHeader = () => {
  return (
    <>
      <SC.Container>
        <Link href="/accounts/setting">
          <Image src={setting} alt="profile" width={24} height={24} />
        </Link>
        <h2>Jinnie</h2>
        <Link href="/explore/people">
          <Image src={accountAdd} alt="profile" width={24} height={24} />
        </Link>
      </SC.Container>
    </>
  );
};

export default UserHeader;
