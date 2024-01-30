import Image from "next/image";
import { useRouter } from "next/router";
import * as SC from "@/styles/styled/atoms_header";

interface BasePageHeaderProps {
  title: string;
  backImage: any;
  customContent: React.ReactNode;
}

export const BasePageHeader: React.FC<BasePageHeaderProps> = ({
  title,
  backImage,
  customContent,
}) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <SC.Header>
      <div style={{ display: "flex" }}>
        <button onClick={goBack}>
          <Image src={backImage} alt="prev-page" width={24} height={24} />
        </button>
      </div>
      <SC.TitleArea>
        <SC.Title>{title}</SC.Title>
      </SC.TitleArea>
      {customContent}
    </SC.Header>
  );
};
