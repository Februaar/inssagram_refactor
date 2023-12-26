import { PostContentData } from "@/types/PostTypes";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { gridView, calendarView, bookmark, tagged } from "@/images/index";

interface PostNavProps {
  user_id: any;
  post: PostContentData[] | undefined;
  isLoggined: boolean;
}

const PostNavigation: React.FC<PostNavProps> = ({
  user_id,
  post,
  isLoggined,
}) => {
  return (
    <>
      <Container>
        <Link href={`/${user_id}`}>
          <Image src={gridView} alt="grid-view" width={24} height={24} />
        </Link>
        <Link href={`/${user_id}/feed`}>
          <Image
            src={calendarView}
            alt="calendar-view"
            width={24}
            height={24}
          />
        </Link>
        {isLoggined ? (
          <Link href={`/${user_id}/saved`}>
            <Image
              src={bookmark}
              alt="bookmarked-view"
              width={24}
              height={24}
            />
          </Link>
        ) : (
          ""
        )}
        <Link href={`/${user_id}/tagged`}>
          <Image src={tagged} alt="tagged-view" width={24} height={24} />
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
