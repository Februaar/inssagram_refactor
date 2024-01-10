import styled from "styled-components";

export const PageHeader = styled.div``;

export const CreateBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5%;
  display: flex;
  align-items: center;
  width: 35px;
  height: 35px;
  color: #0095f6;
  padding: 0;
  font-size: 16px;
`;

export const CreateBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  vertical-align: baseline;
`;

export const NewBoardArea = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  vertical-align: baseline;
  padding: 16px;
`;

export const ProfileImg = styled.span`
  width: 30px;
  height: 30px;
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 50%;
  margin-right: 6px;
`;

export const BoardContent = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  width: 315px;
`;

export const TextArea = styled.textarea`
  width: 95%;
  height: 45px;
  overflow-x: auto;
  overflow-y: auto;
  overflow-wrap: break-word;
  padding: 3px;
`;

export const BoardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;

export const Blur = styled.div`
  position: absolute;
  top: 124px;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 50%);
`;

export const Additional = styled.section``;
