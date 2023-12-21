import Image from "next/image";
import styled from "styled-components";

const SocialLogin = () => {
  return (
    <>
      <Container>
        {/* <Image src={} alt="kakako-login" /> */}
        <LoginButton>카카오톡으로 로그인</LoginButton>
      </Container>
    </>
  );
};

export default SocialLogin;

const Container = styled.div`
  display: flex;
  background-color: #f7e600;
  justify-content: center;
  border-radius: 8px;
  margin: 15px 40px 8px;
  width: 100%;
  height: 35px;
`;

const LoginButton = styled.button`
  padding: 7px 16px;
  color: #3a1d1d;
`;
