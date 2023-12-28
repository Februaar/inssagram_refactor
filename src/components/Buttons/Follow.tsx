import styled from "styled-components";

const FollowButton = () => {
  return (
    <>
      <Follow>
        <Button>팔로우</Button>
      </Follow>
    </>
  );
};

export default FollowButton;

const Follow = styled.div`
  display: flex;
  justify-content: center;
  min-width: 70px;
  height: 30px;
  border-radius: 8px;
  color: #ffffff;
  background-color: #0095f6;
  margin-left: 8px;
`;

const Button = styled.button`
  color: inherit;
`;
