import { useState, useEffect } from "react";
import styled from "styled-components";
import { UserState } from "@/types/UserTypes";

interface NotiBubbleProps {
  count: number;
}

const NotiBubble: React.FC<NotiBubbleProps> = ({ count }) => {
  const [showBubble, setShowBubble] = useState<boolean>(true);

  useEffect(() => {
    if (count > 0) {
      setShowBubble(true);

      const timer = setTimeout(() => {
        setShowBubble(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [count]);

  return (
    <>
      {count > 0 && showBubble && (
        <BubbleContainer>
          <span className="count">🐯 {count}</span>
        </BubbleContainer>
      )}
    </>
  );
};

export default NotiBubble;

const BubbleContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background: #f7cac9;
  min-width: 46px;
  max-width: 50px;
  height: 33px;
  padding: 5px;
  border-radius: 8px;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 100%;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #f7cac9;
    transform: translateX(-20%);
  }

  .count {
    margin-left: 3px;
    background-color: transparent;
    color: #ffffff;
  }
`;
