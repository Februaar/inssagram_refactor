import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 45px;
  padding: 12px 0;
  border-top: 1px solid #dbdbdb;

  & > * {
    cursor: pointer;
  }
`;
