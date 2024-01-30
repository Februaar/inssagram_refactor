import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  flex-grow: 1;
  order: 4;
  flex-direction: column;
`;

export const PageContainer = styled.div`
  position: static;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-self: auto;
  justify-content: flex-start;
  min-width: 0;
  min-height: 0;
  overflow-y: visible;
  overflow-x: visible;
`;

export const ContentArea = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-self: auto;
  justify-content: flex-start;
  padding: 12px;
  overflow-y: visible;
  overflow-x: visible;
`;
