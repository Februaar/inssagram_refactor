import styled from "styled-components";
import { SearchResultData } from "@/types/SearchTypes";
import DirectListItem from "@/components/Items/DirectList";

interface DirectListProps {
  results: SearchResultData[];
  onClick: (selectedAccount: SearchResultData) => void;
}

const DirectListContainer: React.FC<DirectListProps> = ({
  results,
  onClick,
}) => {
  return (
    <Container>
      {results.map((result) => (
        <DirectListItem
          key={result.memberId}
          result={result}
          onClick={onClick}
        />
      ))}
    </Container>
  );
};

export default DirectListContainer;

const Container = styled.div`
  position: static;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: auto;
  justify-content: flex-start;
  margin-top: 16px;
  overflow-y: visible;
  overflow-x: visible;
`;
