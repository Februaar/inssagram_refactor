import styled from "styled-components";

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 5fr;
  align-items: center;
  margin: 10px 16px;
  padding: 8px 16px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
`;

export const SearchIcon = styled.div`
  max-width: 18px;
  margin-right: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 8px;
`;
