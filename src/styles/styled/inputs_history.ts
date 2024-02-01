import styled from "styled-components";

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  padding: 8px 16px;
`;

export const Profile = styled.div`
  width: 44px;
  margin-right: 14px;
`;

export const HistoryArea = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;
`;

export const HistoryInfo = styled.div`
  display: grid;
  grid-row-gap: 3px;
`;

export const Account = styled.p``;

export const DetailInfo = styled.div`
  font-size: 12px;
`;

export const Job = styled.span`
  color: #92a8d1;
`;

export const FriendStatus = styled.span`
  color: #737373;
`;

export const DeleteBtn = styled.button`
  margin-right: 8px;
`;
