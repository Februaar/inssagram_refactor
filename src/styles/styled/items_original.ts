import styled from "styled-components";

export const OriginalContainer = styled.div`
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  padding: 12px 0;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Profile = styled.div`
  display: block;
  margin: 0 8px;
`;

export const CommentArea = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  align-self: auto;
  min-width: 0;
  min-height: 0;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Comment = styled.div`
  position: static;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  min-width: 0;
  min-height: 0;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Details = styled.div`
  position: relative;
  display: block;
  min-width: 0;
  min-height: 0;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Nickname = styled.div`
  position: static;
  display: inline-block;
  overflow-y: visible;
  overflow-x: visible;
`;

export const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Span = styled.span`
  display: inline;
  margin: 0;
  text-align: inherit;
  font-weight: 600;
`;

export const Divi = styled.span`
  display: inline;
  margin: 0 !important;
  font-weight: 400;
`;

export const Content = styled.span`
  display: inline !important;
  margin: 0 !important;
  font-weight: 400;
`;

export const Time = styled.div`
  position: static;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: row;
  align-items: center;
  height: 16px;
  margin-top: 4px;
`;

export const Stroke = styled.div`
  border-bottom: 1px solid #dbdbdb;
  padding-top: 8px;
  margin: 0 16px 16px;
`;
