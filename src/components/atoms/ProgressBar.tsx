import styled, { keyframes } from "styled-components";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  return (
    <StyledProgressBar percent={percent}>
      <ColoredProgressBar percent={percent} />
    </StyledProgressBar>
  );
};

const StyledProgressBar = styled.div<{ percent: number }>`
  position: fixed;
  width: ${(props) => props.percent}%;
  height: 3px;
  background-color: #ffffff;
  z-index: 15;
`;

const colorChange = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
`;

const ColoredProgressBar = styled.div<{ percent: number }>`
  background: linear-gradient(
    to right,
    #d300c5 0%,
    #ff7a00 40%,
    #ff0169 60%,
    #7638fa 80%,
    #d300c5 100%
  );
  width: ${(props) => props.percent}%;
  height: 100%;
  background-size: 500% 100%;
  animation: ${colorChange} 2s linear infinite;
`;

export default ProgressBar;
