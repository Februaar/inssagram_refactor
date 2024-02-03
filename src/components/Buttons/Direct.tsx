import Link from "next/link";
import Image from "next/image";
import { directNew } from "@/images";

interface DirectNewProps {}

const DirectNew: React.FC<DirectNewProps> = () => {
  return (
    <>
      <Link href="/direct/new">
        <Image src={directNew} alt="new-direct-message" />
      </Link>
    </>
  );
};

export default DirectNew;
