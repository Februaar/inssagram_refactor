import Image from "next/image";
import styled from "styled-components";
import { kakaoTalk } from "@/images";

const SocialLogin = () => {
  return (
    <>
      <Container>
        <Image
          src={kakaoTalk}
          alt="kakako-login"
          width={24}
          height={24}
          style={{ borderRadius: "100%" }}
        />
        <LoginButton>카카오톡으로 로그인</LoginButton>
      </Container>
    </>
  );
};

export default SocialLogin;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  border-radius: 8px;
  background-color: #f7e600;
  margin: 22px 40px 8px;
`;

const LoginButton = styled.button`
  color: #3a1d1d;
  padding: 7px 16px;
`;
