import styled from "styled-components";

export const Container = styled.header`
  padding: 0 16px;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// ProfileCard
export const CardContainer = styled.header`
  height: 77px;
  margin: 16px 16px 24px;
  display: flex;
  align-items: stretch;
`;

export const Profile = styled.div`
  display: flex;
  margin-right: 28px;
  justify-content: center;
`;

export const EditArea = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const UserArea = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Id = styled.h1`
  font-size: 20px;
  font-weight: 400;
`;

export const Connect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: center;
  height: 32px;
  border-radius: 8px;
  background-color: #efefef;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0 16px;
  font-size: 14px;
`;
