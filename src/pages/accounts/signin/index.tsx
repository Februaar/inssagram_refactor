import styled from "styled-components";
import SigninInput from "@/components/Inputs/Signin";

const SigninPage = () => {
  return (
    <Container>
      <span className="logo">💼</span>
      <div className="logo-title">Inssagram</div>
      <PageContent>
        <SigninInput />
      </PageContent>
    </Container>
  );
};

export default SigninPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 70px;

  .logo {
    font-size: 45px;
  }

  .logo-title {
    display: flex;
    justify-content: center;
    font-size: 45px;
    margin-top: 25px;
    margin-bottom: 12px;
    letter-spacing: -2px;
  }
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;
