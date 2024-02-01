import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 44px;
  padding: 0 16px;
  border-bottom: 1px solid #dbdbdb;
`;

export const TitleArea = styled.div`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  text-align: inherit;
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-overflow: ellipsis;
  height: 30px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.3px;
  word-wrap: break-word;
  white-space: nowrap;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Span = styled.span`
  min-width: 24px;
`;
