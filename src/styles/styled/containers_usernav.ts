import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 12px 0;
  height: 60px;
  border-top: 1px solid #dbdbdb;
`;

export const Nav = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 33.3%;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 35.33px;
`;

export const Title = styled.span`
  color: #737373;
`;
