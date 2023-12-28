import Image from "next/image";
import styled from "styled-components";
import { progressActivity } from "@/images/index";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <LoadingIcon>
      <Image src={progressActivity} alt="progress" />
    </LoadingIcon>
  );
};

const LoadingIcon = styled.div`
  position: absolute;
  top: 25%;
  right: 50%;
`;

export default Loading;
