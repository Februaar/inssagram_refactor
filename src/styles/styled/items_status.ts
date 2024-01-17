import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  margin: 8px 0;
  align-items: center;
`;

export const ClickTo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
`;

export const AccountImg = styled(Image)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 100%;
  margin-right: 12px;
`;

export const ContentArea = styled.div`
  width: 242px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
`;

export const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 36px;
`;

export const Id = styled.span`
  color: inherit;
  font-size: inherit;
  padding-bottom: 3px;
`;
