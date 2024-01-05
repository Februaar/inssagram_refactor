import { chevronLeft, close } from "@/images/index";
import { BasePageHeader } from "./BaseHeader";

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return <BasePageHeader title={title} backImage={chevronLeft} />;
};

interface ClosePageHeaderProps {
  title: string;
}

export const ClosePageHeader: React.FC<ClosePageHeaderProps> = ({ title }) => {
  return <BasePageHeader title={title} backImage={close} />;
};
