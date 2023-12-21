import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import * as SC from "@/styles/styled/inputs_email";
import AddressButton from "@/components/Buttons/Address";

const EmailInput = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isDisabled, isSetDisabled] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        `${process.env.SERVER_URL}/signup/check/email`,
        { email: email }
      );

      if (res.status === 200) {
        alert(res.data.message);
        console.log(res);
        router.push("/accounts/signup/email/emailConfirmation");
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
        <SC.Title>이메일</SC.Title>
        <SC.EmailInfo>
          <SC.Email
            alt="email"
            placeholder="이메일을 입력하세요"
            onChange={(e) => setEmail(e.target.value)}
          />
          <SC.AddressType>
            <AddressButton address="@gmail.com" />
            <AddressButton address="@naver.com" />
            <AddressButton address="@kakao.com" />
            <AddressButton address="@outlook.com" />
          </SC.AddressType>
        </SC.EmailInfo>
        <SC.SubmitButton>
          <SC.Btn onClick={handleSubmit}>다음</SC.Btn>
        </SC.SubmitButton>
      </SC.Container>
    </>
  );
};

export default EmailInput;
