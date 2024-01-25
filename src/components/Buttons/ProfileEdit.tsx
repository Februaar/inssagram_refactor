import Link from "next/link";
import styled from "styled-components";

interface ProfileEditProps {
  user: any;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ user }) => {
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
  width: 250px;
  height: 32px;
  border-radius: 8px;
  background-color: #efefef;
`;

const Button = styled.button`
  padding: 0 16px;
  font-size: 14px;
`;
