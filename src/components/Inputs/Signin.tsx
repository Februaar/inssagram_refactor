import styled from "styled-components";
import SocialLogin from "@/components/Buttons/SocialLogin";

const SigninInput = () => {
  return (
    <LoginForm>
      <Signin>
        <Input>
          <Id placeholder="이메일을 입력하세요" />
        </Input>
        <Input>
          <Password placeholder="비밀번호를 입력하세요" />
        </Input>
        <Login>
          <LoginBtn>로그인</LoginBtn>
        </Login>
      </Signin>
      <Signup>
        <Text>계정이 없으신가요?</Text>
        <SignupBtn>가입하기</SignupBtn>
      </Signup>
      <SocialLogin />
    </LoginForm>
  );
};

export default SigninInput;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
`;

const Signin = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

const Input = styled.div`
  width: 100%;
  margin: 0 40px 6px;
`;

const Id = styled.input`
  width: 100%;
  height: 37px;
  padding: 9px 0 7px 8px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: #fafafa;
`;

const Password = styled.input`
  width: 100%;
  height: 37px;
  padding: 9px 0 7px 8px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: #fafafa;
`;

const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 40px 8px;
width: 100%;
  height: 33px;
  border-radius: 8px;
  background-color: #0095f6;
`;

const LoginBtn = styled.button`
  color: #ffffff;
`;

const Signup = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 39px;
`;

const Text = styled.span`
  color: #737373;
`;

const SignupBtn = styled.button`
  margin-left: 5px;
  color: #0095f6;
`;
