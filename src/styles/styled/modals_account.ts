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

export const ModalContainer = styled.div`
  width: 70vw;
  padding: 3.5px;
  border-radius: 12px;
`;

export const ModalContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
`;

export const Title = styled.p`
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #cccccc;
  padding: 12px 8px;
  margin-top: 5px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  align-items: center;
`;

export const AccountArea = styled.div`
  display: grid;
  justify-items: center;
  padding: 8px 12px;
`;

export const Profile = styled.div``;

export const Nickname = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 8px;
  font-size: 16px;
  font-weight: 600;
`;

export const InfoArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  height: 100%;
  padding: 12px 20px;
`;

export const Info = styled.div``;

export const Detail = styled.div`
  color: #737373;
  margin-top: 3px;
`;

export const ModalClose = styled.button`
  display: grid;
  justify-items: center;
  align-items: center;
  margin-top: 5px;
  padding: 12px 8px;
  border-top: 1px solid #ccc;
`;
