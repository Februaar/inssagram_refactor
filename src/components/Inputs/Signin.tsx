import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import * as SC from "@/styles/styled/inputs_signin";
import SocialLogin from "@/components/Buttons/SocialLogin";

const SigninInput = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.SERVER_URL}/signin`, {
        email: email,
        password: password,
      });

      if (res.status === 200) {
        const token = res.headers.authorization;
        sessionStorage.setItem("token", token);

        // const userInfo = res.data.data;
        // dispatch(loginUser(userInfo));
        console.log("login token:", token);
        router.push("/main");
      } else {
        console.log("로그인 실패:", res.data.error);
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
    }
  };

  return (
    <SC.FormContainer>
      <SocialLogin />
      <SC.Or>또는</SC.Or>
      <SC.SigninArea>
        <SC.InputItem>
          <SC.Input
            alt="email"
            placeholder="이메일을 입력하세요"
            onChange={(e) => setEmail(e.target.value)}
          />
        </SC.InputItem>
        <SC.InputItem>
          <SC.Input
            alt="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => setPassword(e.target.value)}
          />
        </SC.InputItem>
        <SC.SigninBtn>
          <SC.Btn onClick={handleLogin}>로그인</SC.Btn>
        </SC.SigninBtn>
      </SC.SigninArea>
      <SC.SignupArea>
        <SC.Explan>계정이 없으신가요?</SC.Explan>
        <Link href="/accounts/signup/email">
          <SC.SignupBtn>가입하기</SC.SignupBtn>
        </Link>
      </SC.SignupArea>
    </SC.FormContainer>
  );
};

export default SigninInput;
