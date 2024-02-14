import styled from "styled-components";

interface FollowingItemProps {
  onClick: () => void;
}

const DeleteButton: React.FC<FollowingItemProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Title>삭제</Title>
    </Button>
  );
};

export default DeleteButton;

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
  display: flex;
  flex-basis: auto;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  width: auto;
  min-width: 0;
  height: 32px;
  min-height: 0;
  text-overflow: ellipsis;
  padding: 0 16px;
  background-color: #efefef;
  font-size: 0.875rem;
`;
