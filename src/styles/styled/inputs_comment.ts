import styled from "styled-components";

export const InputContainer = styled.section`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  padding: 8px 0;
`;

export const MyProfile = styled.span`
  position: relative;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-right: 5px;
  background-color: transparent;
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  border: 1px solid #dbdbdb;
  border-radius: 38px;
  padding: 8px;
`;

export const Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.textarea`
  display: flex;
  width: 100%;
  height: 18px;
  max-height: 80px;
  padding-top: 2px;
`;

export const Submit = styled.span`
  min-width: 28px;
  height: 18px;
  color: #0095f6;
  margin-left: 8px;
  display: flex;
  align-items: center;
`;
