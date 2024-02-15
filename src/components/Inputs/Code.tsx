import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSignUp } from "@/context/SignUp";
import styled from "styled-components";

const CodeInput = () => {
  const router = useRouter();
  const { state } = useSignUp();
  const [code, setCode] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `${process.env.SERVER_URL}/signup/check/code`,
        { email: state.emailData, code: code }
      );

      if (res.status === 200) {
        alert(res.data.message);
        router.push("/accounts/signup/nickname");
      } else {
        console.error("Unexpected response status:", res.status);
      }
    } catch (err: any) {
      if (err.response && err.response.status === 409) {
        alert(err.response.data.message);
      } else {
        console.error("error:", err);
      }
    }
  };

  return (
    <Container>
      <div className="big-title">인증 코드 입력</div>
      <div className="title">
        <span>{state.emailData}</span>
        주소로 전송된 인증 코드를 입력하세요.
      </div>
      <div className="info-area">
        <Code
          alt="code"
          placeholder="인증코드"
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="submit-area">
          <button onClick={handleSubmit}>다음</button>
        </div>
      </div>
    </Container>
  );
};

export default CodeInput;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 240px;
  padding-top: 35px;
  margin: 0 auto;

  .big-title {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5px 10px;
  }

  .title {
    color: #737373;
    margin: 12px 0;

    span {
      padding-right: 3px;
    }
  }

  .info-area {
    width: 100%;

    .submit-area {
      display: flex;
      justify-content: center;
      width: 350px;
      height: 40px;
      margin: 16px 0;
      border-radius: 8px;
      background-color: #92a8d1;

      button {
        color: #ffffff;
      }
    }
  }
`;

const Code = styled.input`
  width: 100%;
  height: 38px;
  padding: 4px 9px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
`;
