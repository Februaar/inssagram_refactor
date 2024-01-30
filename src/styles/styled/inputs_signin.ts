import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
`;

export const Or = styled.span`
  padding-top: 10px;
  color: #737373;
`;

export const SigninArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  width: 100%;
  margin-top: 20px;
`;

export const InputItem = styled.div`
  width: 100%;
  margin: 0 40px 6px;
`;

export const Input = styled.input`
  width: 100%;
  height: 37px;
  padding: 9px 0 7px 8px;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
`;

export const Password = styled.input`
  width: 100%;
  height: 37px;
  padding: 9px 0 7px 8px;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
  font-family: Arial, Helvetica, sans-serif;

  &:: placeholder {
    font-family: JejuGothic;
  }
`;

export const SigninBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 40px 8px;
  width: 100%;
  height: 35px;
  border-radius: 8px;
  background-color: #0095f6;
`;

export const Btn = styled.button`
  color: #ffffff;
`;

export const SignupArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  margin-top: 10px;
`;

export const Explan = styled.span`
  color: #737373;
`;

export const SignupBtn = styled.button`
  margin-left: 5px;
  color: #0095f6;
`;
