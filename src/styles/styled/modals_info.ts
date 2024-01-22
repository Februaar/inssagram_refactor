import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  padding: 3px;
  border-radius: 12px;
`;

export const ContentArea = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 315px;
  height: 15vh;
`;

export const ModalItem = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #ccc;
  justify-items: center;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;
