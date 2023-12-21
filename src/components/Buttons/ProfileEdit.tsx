import Link from "next/link";
import styled from "styled-components";

const ProfileEdit = () => {
  return (
    <>
      <Link href="/accounts/edit">
        <Container>
          <Button>프로필편집</Button>
        </Container>
      </Link>
    </>
  );
};

export default ProfileEdit;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  background-color: #efefef;
  width: 250px;
  height: 32px;
`;

const Button = styled.button`
  padding: 0 16px;
  font-size: 14px;
`;
