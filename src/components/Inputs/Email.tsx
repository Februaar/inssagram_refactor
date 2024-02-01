import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSignUp } from "@/context/SignUp";
import * as SC from "@/styles/styled/inputs_email";
import AddressButton from "@/components/Buttons/Address";
import { validateEmail } from "@/utils/authValidation";

const EmailInput = () => {
  const router = useRouter();
  const { dispatch } = useSignUp();
  const [email, setEmail] = useState<string>("");

  const handleAddressSelect = (address: string) => {
    setEmail((prevEmail) => {
      if (prevEmail.trim() !== "") {
        return `${prevEmail}${address}`;
      }

      return address;
    });
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      alert("올바른 이메일 형식이 아닙니다.");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.SERVER_URL}/signup/check/email`,
        { email: email }
      );

      if (res.status === 200) {
        alert(res.data.message);

        dispatch({ type: "SET_SIGNUP_DATA", payload: { emailData: email } });

        // 비동기적으로 동작하려면 await 추가하면 됨
        axios.post(`${process.env.SERVER_URL}/signup/auth`, {
          email: email,
        });
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
            placeholder="이메일 주소를 정확히 입력해주세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SC.AddressType>
            <AddressButton
              address="@gmail.com"
              onSelect={handleAddressSelect}
            />
            <AddressButton
              address="@naver.com"
              onSelect={handleAddressSelect}
            />
            <AddressButton
              address="@kakao.com"
              onSelect={handleAddressSelect}
            />
            <AddressButton
              address="@outlook.com"
              onSelect={handleAddressSelect}
            />
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
