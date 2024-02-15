import Link from "next/link";
import styled from "styled-components";

const ProfileEditButton = () => {
  return (
    <>
      <Link href="/accounts/edit">
        <Container>
          <button>프로필편집</button>
        </Container>
      </Link>
    </>
  );
};

export default ProfileEditButton;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  height: 32px;
  border-radius: 8px;
  background-color: #efefef;

  button {
    padding: 0 16px;
    font-size: 14px;
  }
`;
