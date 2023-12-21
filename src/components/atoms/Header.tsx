import Image from "next/image";
import { useRouter } from "next/router";
import * as SC from "@/styles/styled/atoms_header";
import { chevronLeft } from "@/images/index";

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <SC.Header>
      <button onClick={goBack}>
        <Image src={chevronLeft} alt="prev-page" width={24} height={24} />
      </button>
      <SC.Title>{title}</SC.Title>
      <SC.Span></SC.Span>
    </SC.Header>
  );
};
