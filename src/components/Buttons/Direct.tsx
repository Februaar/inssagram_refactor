import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { directNew } from "@/images";

export const SearchAccount = () => {
  return (
    <Link href="/direct/new">
      <Image src={directNew} alt="new-direct-message" />
    </Link>
  );
};

interface OpenChatRoomProps {
  onClick: () => void;
}

export const OpenChatRoom: React.FC<OpenChatRoomProps> = ({ onClick }) => {
  return <Next onClick={onClick}>다음</Next>;
};

const Next = styled.button`
  color: #0095f6;
  background-color: transparent;
`;
