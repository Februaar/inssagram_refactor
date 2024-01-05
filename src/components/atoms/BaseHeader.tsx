import Image from "next/image";
import { useRouter } from "next/router";
import * as SC from "@/styles/styled/atoms_header";

interface BasePageHeaderProps {
  title: string;
  backImage: any;
}

export const BasePageHeader: React.FC<BasePageHeaderProps> = ({
  title,
  backImage,
}) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <SC.Header>
      <button onClick={goBack}>
        <Image src={backImage} alt="prev-page" width={24} height={24} />
      </button>
      <SC.Title>{title}</SC.Title>
      <SC.Span></SC.Span>
    </SC.Header>
  );
};
