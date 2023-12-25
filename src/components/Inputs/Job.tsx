import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSignUp } from "@/context/SignUp";
import * as SC from "@/styles/styled/inputs_job";

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
    <>
      <SC.Container>
        <SC.Top>💼</SC.Top>
        <SC.Title>직업 추가</SC.Title>
        <SC.SubTitle>
          다양한 업계의 사람들을 만나볼 수 있도록 직업을 추가하세요.
        </SC.SubTitle>
        <SC.JobInfo>
          <SC.Job
            alt="job"
            placeholder="직업"
            onChange={(e) => setJob(e.target.value)}
          />
          <SC.SubmitButton>
            <SC.Btn onClick={handleSubmit}>다음</SC.Btn>
          </SC.SubmitButton>
        </SC.JobInfo>
      </SC.Container>
    </>
  );
};

export default JobInput;
