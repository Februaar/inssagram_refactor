import styled from "styled-components";

const AddressButton = ({ address }) => {
  return (
    <>
      <Container>{address}</Container>
    </>
  );
};

export default AddressButton;

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 0 4px 8px 0;
  padding: 7px 16px;
  background-color: #efefef;
  height: 32px;
`;
