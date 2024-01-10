import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  right: 5%;
  top: 45px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  border-radius: 6px;
  padding: 3px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  `;
  
  export const CreateIcon = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100px;
  height: 37px;
  padding: 8px 16px;
`;
