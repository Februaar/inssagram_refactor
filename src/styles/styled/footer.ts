import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  z-index: 10;
  padding: 0 16px;
  justify-content: space-evenly;
  border-top: 1px solid #dbdbdb;
`;

export const Icon = styled.span`
  cursor: pointer;
  padding: 12px;
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;
