import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSignUp } from "@/context/SignUp";
import styled from "styled-components";
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
    <Container>
      <div className="title">이메일</div>
      <div className="input-area">
        <Email
          alt="email"
          placeholder="이메일 주소를 정확히 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="address-type">
          <AddressButton address="@gmail.com" onSelect={handleAddressSelect} />
          <AddressButton address="@naver.com" onSelect={handleAddressSelect} />
          <AddressButton address="@kakao.com" onSelect={handleAddressSelect} />
          <AddressButton
            address="@outlook.com"
            onSelect={handleAddressSelect}
          />
        </div>
      </div>
      <div className="submit-area">
        <button onClick={handleSubmit}>다음</button>
      </div>
    </Container>
  );
};

export default EmailInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 240px;
  padding-top: 35px;
  margin: 0 auto;

  .title {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5px 10px;
  }

  .input-area {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 8px;
    width: 100%;
    height: 120px;

    .address-type {
      display: flex;
      overflow-y: hidden;
    }
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

const Email = styled.input`
  width: 100%;
  height: 37px;
  padding: 4px 9px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
`;
