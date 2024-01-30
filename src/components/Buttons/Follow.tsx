import styled from "styled-components";

const FollowButton = () => {
  return (
    <>
      <Button>
        <Title>팔로잉</Title>
      </Button>
    </>
  );
};

export default FollowButton;

const Button = styled.div`
  position: static;
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  align-self: auto;
  justify-content: flex-start;
  margin-left: 12px;
  overflow-y: visible;
  overflow-x: visible;
`;

const Title = styled.button`
  position: relative;
  display: block;
  text-align: center;
  border-radius: 8px;
  padding: 7px 16px;
  pointer-events: auto;
  width: 82px;
  height: 32px;
  color: #222222;
  background-color: #efefef;
  text-overflow: ellipsis;
  text-transform: inherit;
`;
