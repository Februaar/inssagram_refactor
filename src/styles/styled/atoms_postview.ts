import styled from "styled-components"

export const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  width: 100%;
  height: 100%;
`;

export const PreView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 140px;
  height: 140px;
  border: 1px solid #dbdbdb;
`;