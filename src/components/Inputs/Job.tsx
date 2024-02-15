import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSignUp } from "@/context/SignUp";
import styled from "styled-components";

const JobInput = () => {
  const router = useRouter();
  const { dispatch, state } = useSignUp();
  const [job, setJob] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${process.env.SERVER_URL}/signup`, {
        email: state.emailData,
        nickname: state.nicknameData,
        password: state.passwordData,
        job: state.jobData,
      });

      if (res.status === 200) {
        alert(res.data.message);

        dispatch({ type: "SET_SIGNUP_DATA", payload: { jobData: job } });
        router.push("/accounts/signin");
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
      <span className="logo">💼</span>
      <div className="title">직업 추가</div>
      <div className="sub-title">
        다양한 업계의 사람들을 만나볼 수 있도록 직업을 추가하세요.
      </div>
      <div className="input-area">
        <Job
          alt="job"
          placeholder="직업"
          onChange={(e) => setJob(e.target.value)}
        />
        <div className="submit-area">
          <button onClick={handleSubmit}>다음</button>
        </div>
      </div>
    </Container>
  );
};

export default JobInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding-top: 35px;
  margin: 0 auto;

  .logo {
    font-size: 60px;
    padding-bottom: 15px;
  }

  .title {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5px 10px;
  }

  .sub-title {
    color: #737373;
    margin: 12px 0;
  }

  .input-area {
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

const Job = styled.input`
  width: 100%;
  height: 38px;
  padding: 4px 9px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
`;
