import styled from "styled-components";

export const CommentContainer = styled.div`
  position: static;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-self: auto;
  overflow-y: visible;
  overflow-x: visible;
`;

export const ItemArea = styled.div`
  padding-left: 8px;
`;

export const ContentsArea = styled.div`
  position: static;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  align-self: auto;
  padding: 12px 0;
`;

export const Profile = styled.div`
  margin-right: 8px;
`;
export const CommentArea = styled.div`
  position: static;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  align-self: auto;
  min-width: 0;
  min-height: 0;
`;

export const Comment = styled.div`
  position: relative;
  display: block;
  flex-shrink: 0;
  align-items: stretch;
  vertical-align: baseline;
  overflow-y: visible;
  overflow-x: visible;
  min-width: 0;
  min-height: 0;
`;

export const Nickname = styled.div`
  position: static;
  display: inline-block;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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

export const Details = styled.div`
  position: static;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-self: auto;
  height: 16px;
  margin-top: 4px;
`;

export const Like = styled.div`
  position: static;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const ReplyArea = styled.div`
  position: static;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  align-self: auto;
  margin-left: 40px;
`;
