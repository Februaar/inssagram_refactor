import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSignUp } from "@/context/SignUp";
import * as SC from "@/styles/styled/inputs_code";

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
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        alert(error.response.data.message);
      } else {
        console.error("error:", error);
      }
    }
  };

  return (
    <>
      <SC.Container>
        <SC.Title>인증 코드 입력</SC.Title>
        <SC.SubTitle>
          주소로 전송된 인증 코드를 입력하세요.
        </SC.SubTitle>
        <SC.CodeInfo>
          <SC.Code
            alt="code"
            placeholder="인증코드"
            onChange={(e) => setCode(e.target.value)}
          />
          <SC.SubmitButton>
            <SC.Btn onClick={handleSubmit}>다음</SC.Btn>
          </SC.SubmitButton>
        </SC.CodeInfo>
      </SC.Container>
    </>
  );
};

export default CodeInput;
