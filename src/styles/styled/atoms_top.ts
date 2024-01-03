import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: center;
`;

export const Account = styled.header`
  display: flex;
  align-items: center;
  width: 382px;
  height: 60px;
  padding: 14px 4px 14px 16px;
`;

export const Profile = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
`;

export const Id = styled.div`
  margin-left: 12px;
`;

export const More = styled.button`
  padding: 8px;
  width: 40px;
  height: 40px;
`;
