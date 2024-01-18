import styled from "styled-components";

export const OriginalContainer = styled.div`
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  padding: 12px 0;
  overflow-x: visible;
  overflow-y: visible;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const CommentItem = styled.li`
  padding: 5px 16px 16px 0;
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Profile = styled.div`
  align-self: flex-start !important;
  margin-right: 18px;
`;

export const Content = styled.div`
  position: relative;
  display: inline-block;
  flex-shrink: 1;
  min-width: 0;
`;

export const Nickname = styled.h2`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  margin-right: 5px;
`;

export const Comment = styled.h1`
  display: inline;
  font-size: inherit;
  font-weight: 300;
  color: #262626;
`;

export const Time = styled.div`
  margin-top: 8px;
  margin-bottom: 4px;
  overflow-y: visible;
  overflow-x: visible;
  color: #737373;
`;

export const Stroke = styled.div`
  border-bottom: 1px solid #dbdbdb;
  padding-top: 8px;
  margin: 0 16px 16px;
`;
