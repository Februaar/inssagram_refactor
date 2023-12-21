import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  width: 100%;
  height: 147px;
`;

export const IconContainer = styled.section`
  margin-top: 4px;
  padding: 6px 0 8px;
  height: 54px;
`;

export const FavoriteContainer = styled.section`
  display: flex;
  min-height: 18px;
  margin-bottom: 8px;
`;

export const CommentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: 0;
  overflow: auto;
`;

export const OriginalComment = styled.div`
  margin-bottom: 4px;
`;

export const MoreComments = styled.div`
  margin-bottom: 4px;
  color: #737373;
`;

export const CreatedAt = styled.div`
  margin-bottom: 8px;
  font-size: 12px;
  color: #737373;
`;
