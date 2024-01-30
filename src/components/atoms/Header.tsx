import * as SC from "@/styles/styled/atoms_header";
import { chevronLeft, arrowBack, close } from "@/images/index";
import { BasePageHeader } from "./BaseHeader";
import DirectNew from "@/components/Buttons/Direct";

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <BasePageHeader
      title={title}
      backImage={chevronLeft}
      customContent={<SC.Span />}
    />
  );
};

interface ArrowBackPageHeaderProps {
  title: string;
}

export const ArrowBackPageHeader: React.FC<ArrowBackPageHeaderProps> = ({
  title,
}) => {
  return (
    <BasePageHeader
      title={title}
      backImage={arrowBack}
      customContent={<SC.Span />}
    />
  );
};

interface DirectPageHeaderProps {
  title: string;
}

export const DirectPageHeader: React.FC<DirectPageHeaderProps> = ({
  title,
}) => {
  return (
    <BasePageHeader
      title={title}
      backImage={arrowBack}
      customContent={<DirectNew />}
    />
  );
};

interface ClosePageHeaderProps {
  title: string;
}

export const ClosePageHeader: React.FC<ClosePageHeaderProps> = ({ title }) => {
  return (
    <BasePageHeader
      title={title}
      backImage={close}
      customContent={<SC.Span />}
    />
  );
};
