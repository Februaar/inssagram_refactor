import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSignUp } from "@/context/SignUp";
import styled from "styled-components";
import { validatePassword } from "@/utils/authValidation";

const DetailInput = () => {
  const router = useRouter();
  const { dispatch } = useSignUp();
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
    <Container>
      <div className="big-title">닉네임 및 비밀번호 입력</div>
      <div className="title">
        친구들이 회원님을 찾을 수 있도록 닉네임을 추가하세요.
      </div>
      <DetailInfo>
        <div className="detail-area">
          <Detail
            type="text"
            alt="nickname"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Password
            type="password"
            alt="password"
            placeholder="영문, 숫자, 특수문자 조합 (6-10자)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submit-area">
          <button onClick={handleSubmit}>다음</button>
        </div>
      </DetailInfo>
    </Container>
  );
};

export default DetailInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  min-height: 240px;
  padding-top: 35px;
  margin: 0 auto;

  .big-title {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5px 10px;
  }

  .title {
    font-weight: 400;
    color: #737373;
    margin: 12px 0;
  }
`;

const DetailInfo = styled.div`
  width: 100%;

  .detail-area {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

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
`;

const Detail = styled.input`
  width: 100%;
  height: 38px;
  padding: 4px 9px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
`;

const Password = styled(Detail)`
  font-family: Arial, Helvetica, sans-serif;

  &:: placeholder {
    font-family: JejuGothic;
  }
`;
