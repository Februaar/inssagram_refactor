import styled from "styled-components";

export const Container = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  height: calc(100vh - 45px - 50px);
  overflow-y: visible;
  overflow-x: visible;
`;

export const DetailArea = styled.div`
  display: flex;
  flex: 1 1 auto;
  overflow-y: hidden;
  flex-direction: column;
`;

export const ContentsArea = styled.div`
  border-bottom: 1px solid #dbdbdb;
  overflow-y: scroll;
  height: 90%;
`;

export const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
`;