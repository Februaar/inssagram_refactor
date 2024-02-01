import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  min-height: 240px;
  padding-top: 35px;
  margin: 0 auto;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px 10px;
`;

export const SubTitle = styled.div`
  font-weight: 400;
  color: #737373;
  margin: 12px 0;
`;

export const DetailInfo = styled.div`
  width: 100%;
`;

export const DetailArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Detail = styled.input`
  width: 100%;
  height: 38px;
  padding: 4px 9px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
`;

export const Password = styled(Detail)`
  font-family: Arial, Helvetica, sans-serif;

  &:: placeholder {
    font-family: JejuGothic;
  }
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
