import styled from "styled-components";

export const NewBoardArea = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  vertical-align: baseline;
  padding: 16px;
  border-bottom: 1px solid #dbdbdb;
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
  z-index: 50;
`;
