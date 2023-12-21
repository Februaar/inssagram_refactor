import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  min-height: 550px;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 45px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 45px;
  letter-spacing: -1px;
  margin-top: 36px;
  margin-bottom: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;
