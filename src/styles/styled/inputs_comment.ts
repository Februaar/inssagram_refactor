import styled from "styled-components";

export const InputContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80px;
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

export const TextForm = styled.form`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: row;
  padding: 8px;
  border: 1px solid #dbdbdb;
  border-radius: 38px;
`;

export const TextArea = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: row;
  align-items: center;
  vertical-align: baseline;
`;

export const Text = styled.textarea`
  display: flex;
  flex-grow: 1;
  resize: none;
  width: 0;
  height: 18px !important;
  max-height: 80px;
`;

export const Submit = styled.span`
  display: flex;
  align-items: center;
  min-width: 28px;
  height: 18px;
  color: #0095f6;
  margin-left: 8px;
  cursor: pointer;
`;
