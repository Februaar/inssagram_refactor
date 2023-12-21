import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { gridView, calendarView, bookmark, tagged } from "@/images/index";

const PostNavigation = () => {
  return (
    <>
      <Container>
        <Link href="/[nickname]">
          <Image src={gridView} alt="profile" width={24} height={24} />
        </Link>
        <Link href="/[nickname]/feed">
          <Image src={calendarView} alt="profile" width={24} height={24} />
        </Link>
        <Link href="/[nickname]/saved">
          <Image src={bookmark} alt="profile" width={24} height={24} />
        </Link>
        <Link href="/[nickname]/tagged">
          <Image src={tagged} alt="profile" width={24} height={24} />
        </Link>
      </Container>
    </>
  );
};

export default PostNavigation;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 45px;
  padding: 12px 0;
  border-top: 1px solid #dbdbdb;
`;
