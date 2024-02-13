import { chevronLeft, arrowBack, close } from "@/images";
import styled from "styled-components";
import { BasePageHeader } from "./BaseHeader";
import { SearchAccount, OpenChatRoom } from "@/components/Buttons/Direct";

interface PageHeaderProps {
  title: any;
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

export const ArrowBackPageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <BasePageHeader
      title={title}
      backImage={arrowBack}
      customContent={<Span />}
    />
  );
};

export const DirectPageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <BasePageHeader
      title={title}
      backImage={arrowBack}
      customContent={<SearchAccount />}
    />
  );
};

interface DirectNewPageHeaderProps {
  onClick: () => void;
  title: any;
}

export const DirectNewPageHeader: React.FC<DirectNewPageHeaderProps> = ({
  onClick,
  title,
}) => {
  return (
    <BasePageHeader
      title={title}
      backImage={arrowBack}
      customContent={<OpenChatRoom onClick={onClick} />}
    />
  );
};

export const ClosePageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <BasePageHeader title={title} backImage={close} customContent={<Span />} />
  );
};

const Span = styled.span`
  min-width: 24px;
`;
