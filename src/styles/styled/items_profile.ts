import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: stretch;
  align-self: auto;
  justify-content: flex-start;
  flex-direction: column;
  margin: 16px 0;
  overflow-y: visible;
  overflow-x: visible;
`;

export const EditItem = styled.div`
  position: static;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: row;
  align-self: auto;
  align-items: stretch;
  justify-content: flex-start;
  border-radius: 20px;
  padding: 16px;
  background-color: #efefef;
  overflow-y: visible;
  overflow-x: visible;
`;

export const EditArea = styled.div`
  position: static;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-self: auto;
  align-items: stretch;
  justify-content: flex-start;
  min-width: 0;
  min-height: 0;
  background-color: transparent;
  border-radius: 0;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Profile = styled.span`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  background-color: transparent;
`;

export const ProfileImg = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: #fafafa;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Edit = styled.div`
  position: static;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  align-self: center;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0 16px;
  background-color: transparent;
  border-radius: 0;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Nickname = styled.span`
  position: relative;
  display: block;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-line;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  min-width: 0;
  max-width: 100%;
  margin: 0;
  overflow-y: visible;
  overflow-x: visible;
  background-color: transparent;
`;

export const EditBtn = styled.div`
  position: relative;
  display: inline-flex;
  flex-basis: auto;
  flex-direction: row;
  align-self: flex-start;
  justify-content: center;
  width: auto;
  min-width: 0;
  height: auto;
  min-height: 0;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 14px;
  text-align: center;
  text-overflow: ellipsis;
`;
