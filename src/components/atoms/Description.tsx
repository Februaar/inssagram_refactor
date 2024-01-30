import { UserPageData } from "@/types/UserTypes";
import styled from "styled-components";

interface DescriptionCardProps {
  user: UserPageData | undefined;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({ user }) => {
  return (
    <>
      {user && (
        <Container>
          <JobArea>
            <Job>{user.companyName}</Job>
          </JobArea>
          <div style={{ maxWidth: "350px", padding: "6px 0" }}></div>
          <Desc>{user.description}</Desc>
        </Container>
      )}
    </>
  );
};

export default DescriptionCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 16px 21px 16px;
  vertical-align: baseline;
  text-overflow: ellipsis;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const JobArea = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  row-gap: 10px;
  column-gap: 10px;
  flex-direction: row;
  align-self: auto;
  align-items: center;
  overflow-y: visible;
  overflow-x: visible;
`;

const Job = styled.span`
  position: relative;
  min-width: 0;
  max-width: 100%;
  color: #0095f6;
  font-size: 14px;
  font-weight: 600;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-line;
  line-height: 18px;
  overflow-y: visible;
  overflow-x: visible;
`;

const Desc = styled.h1`
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
`;
