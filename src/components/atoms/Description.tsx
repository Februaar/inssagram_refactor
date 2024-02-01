import { UserPageData } from "@/types/UserTypes";
import styled from "styled-components";

interface DescriptionCardProps {
  user: UserPageData | undefined;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({ user }) => {
  return (
    <>
      {user && (
        <CardContainer>
          <div>
            <span>{user.companyName}</span>
          </div>
          <div style={{ maxWidth: "350px", padding: "6px 0" }}></div>
          <h1>{user.description}</h1>
        </CardContainer>
      )}
    </>
  );
};

export default DescriptionCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  vertical-align: baseline;
  text-overflow: ellipsis;
  padding: 0 16px 21px 16px;

  div {
    flex-shrink: 0;
    flex-grow: 0;
    display: flex;
    row-gap: 10px;
    column-gap: 10px;
    flex-direction: row;
    align-self: auto;
    align-items: center;
    overflow-y: visible;
    overflow-x: visible;

    span {
      position: relative;
      min-width: 0;
      max-width: 100%;
      color: #92a8d1;
      font-size: 14px;
      font-weight: 600;
      word-wrap: break-word;
      word-break: break-word;
      white-space: pre-line;
      line-height: 18px;
      overflow-y: visible;
      overflow-x: visible;
    }
  }

  h1 {
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
  }
`;
