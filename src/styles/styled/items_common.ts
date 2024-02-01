import styled from "styled-components";

export const CommonItem = styled.div`
  display: block;
  width: 100%;
  max-width: 100%;
  height: 60px;
`;

export const ItemContainer = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  overflow-y: visible;
  overflow-x: visible;
  padding: 8px 16px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 0;
`;

export const Account = styled.div`
  position: relative;
  min-width: 0;
  max-width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-selft: center;
`;

export const AccountImg = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  align-items: stretch;
  justify-content: flex-start;
  align-self: auto;
  margin-right: 12px;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Info = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  flex-basis: auto;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
  min-width: 0;
  height: 36px;
`;

export const InfoArea = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 1;
  flex-direction: column;
  min-width: 0;
  max-width: 100%;
`;

export const DetailsArea = styled.div`
  position: static;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-self: auto;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 0;
  min-height: 0;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Details = styled.div`
  position: static;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: row;
  align-self: auto;
  align-items: stretch;
  justify-content: flex-start;
  cursor: pointer;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Nickname = styled.div`
  position: static;
  display: inline-block;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Divide = styled.div`
  position: static;
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  align-self: auto;
  align-items: stretch;
  padding: 0 4px;
`;

export const Follow = styled.button`
  position: relative;
  display: inline-block;
  padding: 0;
  color: #92a8d1;
`;

export const Desc = styled.span`
  position: relative;
  display: block;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-line;
  color: #737373;
  font-weight: 400;
  line-height: 18px;
  min-width: 0;
  max-width: 100%;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Text = styled.span`
  display: block;
  color: #737373;
  font-weight: 400;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-word;
  white-space: nowrap;
  max-width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const Status = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-self: center;
  min-width: 0;
  max-width: 100%;
`;
