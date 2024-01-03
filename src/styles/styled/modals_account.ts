import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 70vw;
  padding: 3.5px;
  border-radius: 12px;
`;

export const InfoContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
`;

export const ModalTitle = styled.p`
  display: grid;
  justify-items: center;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #cccccc;
  padding: 12px 8px;
  margin-top: 5px;
`;

export const ContentArea = styled.div``;

export const AccountArea = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

export const Account = styled.p``;

export const Id = styled.p``;

export const InfoArea = styled.div``;

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

export const ModalClose = styled.button`
  display: grid;
  justify-items: center;
  margin-top: 5px;
  padding: 12px 8px;
  border-top: 1px solid #ccc;
`;
