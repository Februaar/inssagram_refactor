import { chevronLeft, arrowBack, close } from "@/images";
import styled from "styled-components";
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
      customContent={<Span />}
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
      customContent={<Span />}
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
    <BasePageHeader title={title} backImage={close} customContent={<Span />} />
  );
};

const Span = styled.span`
  min-width: 24px;
`;
