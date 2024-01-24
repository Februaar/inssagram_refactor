import styled from "styled-components";

export const JobContainer = styled.div`
  position: static;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: column;
  align-self: auto;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: 16px;
  overflow-y: visible;
  overflow-x: visible;
  background-color: transparent;
`;

export const JobArea = styled.div`
  position: static;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: column;
  align-self: auto;
  align-items: stretch;
  justify-content: flex-start;
  padding: 16px 0;
  overflow-y: visible;
  overflow-x: visible;
  font-weight: 700;
  background-color: transparent;
`;

export const Job = styled.span`
  position: relative;
  display: block;
  min-width: 0;
  max-width: 100%;
  line-height: 20px;
  white-space: pre-line;
  word-break: break-word;
  font-size: 16px;
  font-weight: 700;
  background-color: transparent;
  overflow-y: visible;
  overflow-x: visible;
`;

export const EditInput = styled.input`
  font-size: 1rem;
  line-height: 20px;
  width: 100%;
  padding: 10px 16px;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  margin: 0;
  background-color: #efefef;
  overflow-y: visible;
  overflow-x: visible;
`;

export const DescContainer = styled.form`
  margin: 0;
  padding: 0;
`;

export const DescArea = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 16px;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Description = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: column;
  align-self: auto;
  align-items: stretch;
  justify-content: flex-start;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Title = styled.label`
  cursor: default;
  font-size: 12px;
  font-weight: 600;
  vertical-align: middle;
`;

export const Desc = styled.span`
  position: relative;
  display: block;
  min-width: 0;
  max-width: 100%;
  line-height: 20px;
  white-space: pre-line;
  word-break: break-word;
  font-size: 16px;
  font-weight: 700;
  padding: 16px 0;
  background-color: transparent;
  overflow-y: visible;
  overflow-x: visible;
`;

export const DescInput = styled.textarea`
  heigh: 40px;
  padding: 10px 80px 10px 16px;
  font-size: 1rem;
  line-height: 20px;
  resize: none;
  border-radius: 12px;
  border: 1px solid #dbdfe4;
`;

export const Text = styled.div`
  position: absolute;
  bottom: 10px;
  right: 16px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  align-self: auto;
  align-items: stretch;
  justify-content: flex-start;
`;

export const Count = styled.span`
  position: relative;
  display: block;
  min-width: 0;
  max-width: 100%;
  line-height: 16px;
  white-space: pre-line;
  word-wrap: break-word;
  word-break: break-word;
  color: #737373;
  font-size: 12px;
  font-weight: 400;
`;

export const SubmitArea = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const Submit = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-basis: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 253px;
  min-width: 0;
  height: 44px;
  min-height: 0;
  margin-top: 16px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  color: #ffffff;
  text-align: center;
  text-overflow: ellipsis;
  letter-spacing: 1px;
  background-color: #0095f6;
  border: 1px solid rgb(0, 0, 0, 0.4);
  border-radius: 8px;
`;
