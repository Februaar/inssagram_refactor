import Image from "next/image";
import styled from "styled-components";
import { brokenImage } from "@/images/index";

const PostView = () => {
  return (
    <>
      <PreView>
        <Image src={brokenImage} alt="broken-image" />
      </PreView>
    </>
  );
};

export default PostView;

const PreView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 140px;
  height: 140px;
  border: 1px solid #dbdbdb;
`;
