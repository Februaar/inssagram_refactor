import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

interface BasePageHeaderProps {
  title: string;
  backImage: string;
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
    <CommonHeader>
      <div className="back-icon">
        <button onClick={goBack}>
          <Image src={backImage} alt="prev-page" width={24} height={24} />
        </button>
      </div>
      <div className="page-title">
        <span className="title">{title}</span>
      </div>
      {customContent}
    </CommonHeader>
  );
};

const CommonHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 44px;
  padding: 0 16px;
  border-bottom: 1px solid #dbdbdb;

  .back-icon {
    display: flex;
  }

  .page-title {
    display: flex;
    flex-shrink: 1;
    align-items: center;
    text-align: inherit;
    cursor: pointer;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-overflow: ellipsis;
      height: 30px;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.3px;
      word-wrap: break-word;
      white-space: nowrap;
      overflow-y: visible;
      overflow-x: visible;
    }
  }
`;
