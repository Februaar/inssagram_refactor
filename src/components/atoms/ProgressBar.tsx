import styled, { keyframes } from "styled-components";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  return (
    <BarContainer percent={percent}>
      <div className="bar-container">
        <ColoredProgressBar percent={percent} />
      </div>
    </BarContainer>
  );
};

export default ProgressBar;

const BarContainer = styled.div<{ percent: number }>`
  position: relative;
  width: 100%;

  .bar-container {
    position: absolute;
    width: ${(props) => props.percent}%;
    height: 3px;
    background-color: #ffffff;
    z-index: 15;
  }
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
