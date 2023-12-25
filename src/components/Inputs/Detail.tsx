import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSignUp } from "@/context/SignUp";
import * as SC from "@/styles/styled/inputs_detail";
import { validatePassword } from "@/utils/authValidation";

const DetailInput = () => {
  const router = useRouter();
  const { dispatch, state } = useSignUp();
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!validatePassword(password)) {
      alert("올바른 비밀번호 형식이 아닙니다.");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.SERVER_URL}/signup/check/nickname`,
        { nickname: nickname }
      );

      if (res.status === 200) {
        alert(res.data.message);

        dispatch({
          type: "SET_SIGNUP_DATA",
          payload: { nicknameData: nickname, passwordData: password },
        });

        router.push("/accounts/signup/job");
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
        <SC.Title>닉네임 및 비밀번호 입력</SC.Title>
        <SC.SubTitle>
          친구들이 회원님을 찾을 수 있도록 닉네임을 추가하세요.
        </SC.SubTitle>
        <SC.DetailInfo>
          <SC.DetailArea>
            <SC.Detail
              alt="nickname"
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <SC.Detail
              alt="password"
              placeholder="영문, 숫자, 특수문자 조합 (6-10자)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </SC.DetailArea>
          <SC.SubmitButton>
            <SC.Btn onClick={handleSubmit}>다음</SC.Btn>
          </SC.SubmitButton>
        </SC.DetailInfo>
      </SC.Container>
    </>
  );
};

export default DetailInput;
