import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 240px;
  padding-top: 35px;
  margin: 0 auto;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px 10px;
`;

export const EmailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
  height: 120px;
`;

export const Email = styled.input`
  width: 100%;
  height: 37px;
  padding: 4px 9px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
`;

export const AddressType = styled.div`
  display: flex;
  overflow-y: hidden;
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 40px;
  margin: 16px 0;
  border-radius: 8px;
  background-color: #92a8d1;
`;

export const Btn = styled.button`
  color: #ffffff;
`;
