import styled from "styled-components";
import OriginalItem from "@/components/Items/Original";
import CommentItem from "@/components/Items/Comment";
import CommentInput from "@/components/Inputs/Comment";

const CommentContainer = () => {
  return (
    <>
      <Container>
        <DetailArea>
          <ContentsArea>
            <OriginalItem />
            <CommentArea>
              <CommentItem />
            </CommentArea>
          </ContentsArea>
          <CommentInput />
        </DetailArea>
      </Container>
    </>
  );
};

export default CommentContainer;

const Container = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  height: calc(100vh - 45px - 50px);
  overflow-y: visible;
  overflow-x: visible;
`;

const DetailArea = styled.div`
  display: flex;
  flex: 1 1 auto;
  overflow-y: hidden;
  flex-direction: column;
`;

const ContentsArea = styled.div`
  border-bottom: 1px solid #dbdbdb;
  overflow-y: scroll;
  height: 90%;
`;

const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
`;
