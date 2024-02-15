import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux/userSlice";
import styled from "styled-components";
import SocialLogin from "@/components/Buttons/SocialLogin";

const SigninInput = () => {
  const router = useRouter();
  const dispatch = useDispatch();
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
        console.log("login token:", token);

        const userInfo = res.data.data;
        dispatch(loginUser(userInfo));
        router.push("/main");
      } else {
        console.log("login failed:", res.data.error);
      }
    } catch (error) {
      console.error("login error:", error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <FormContainer>
      <SocialLogin />
      <span>또는</span>
      <div className="input-container">
        <div className="input-item">
          <Input
            type="text"
            alt="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="input-item">
          <Password
            type="password"
            alt="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="login-button">
          <button onClick={handleLogin}>로그인</button>
        </div>
      </div>
      <div className="signup-container">
        <span>계정이 없으신가요?</span>
        <Link href="/accounts/signup/email">
          <button>가입하기</button>
        </Link>
      </div>
    </FormContainer>
  );
};

export default SigninInput;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;

  span {
    padding-top: 10px;
    color: #737373;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    width: 100%;
    margin-top: 20px;

    .input-item {
      width: 100%;
      margin: 0 40px 6px;
    }

    .login-button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 15px 40px 8px;
      width: 100%;
      height: 35px;
      border-radius: 8px;
      background-color: #92a8d1;

      button {
        color: #ffffff;
      }
    }
  }

  .signup-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 35px;
    margin-top: 10px;

    span {
      color: #737373;
    }

    button {
      margin-left: 5px;
      color: #92a8d1;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 37px;
  padding: 9px 0 7px 8px;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
`;

const Password = styled(Input)`
  font-family: Arial, Helvetica, sans-serif;

  &:: placeholder {
    font-family: JejuGothic;
  }
`;
