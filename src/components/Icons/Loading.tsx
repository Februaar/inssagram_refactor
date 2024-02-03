import Image from "next/image";
import styled from "styled-components";
import { progressActivity } from "@/images";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <LoadingIcon>
      <Image src={progressActivity} alt="progress" />
    </LoadingIcon>
  );
};

const LoadingIcon = styled.span`
  position: absolute;
  top: 25%;
  right: 45%;
  margin: 0 auto;
  z-index: 10;
`;

export default Loading;
