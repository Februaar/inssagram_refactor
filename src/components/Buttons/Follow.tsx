import styled from "styled-components";

interface FollowButtonProps {
  onClick: () => void;
  status: boolean;
}

const FollowButton: React.FC<FollowButtonProps> = ({ onClick, status }) => {
  return (
    <Button onClick={onClick}>
      <button
        style={{
          background: status ? "#efefef" : "#92a8d1",
          color: status ? "#222222" : "#ffffff",
        }}
      >
        {status ? "팔로잉" : "팔로우"}
      </button>
    </Button>
  );
};

export default FollowButton;

export const MainFollowButton: React.FC<FollowButtonProps> = ({
  onClick,
  status,
}) => {
  return (
    <Button onClick={onClick}>
      <button
        style={{
          background: status ? "#efefef" : "#92a8d1",
          color: status ? "#222222" : "#ffffff",
        }}
      >
        {status ? "팔로잉" : "팔로우"}
      </button>
    </Button>
  );
};

const Button = styled.div`
  position: static;
  flex-grow: 0;
  flex-shrink: 1;
  display: flex;
  align-self: auto;
  justify-content: flex-start;
  margin-left: 12px;
  overflow-y: visible;
  overflow-x: visible;

  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 82px;
    height: 32px;
    padding: 7px 16px;
    border-radius: 8px;
  }
`;
