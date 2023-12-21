import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  border-bottom: 1px solid #dbdbdb;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

export const Span = styled.span`
  min-width: 24px;
`;
