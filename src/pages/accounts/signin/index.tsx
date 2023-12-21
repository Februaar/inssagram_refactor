import * as SC from "@/styles/styled/signin";
import SigninInput from "@/components/Inputs/Signin";

const SigninPage = () => {
  return (
    <>
      <SC.Container>
        <SC.Title>💼</SC.Title>
        <SC.Logo>Inssagram</SC.Logo>
        <SC.PageContent>
          <SigninInput />
        </SC.PageContent>
      </SC.Container>
    </>
  );
};

export default SigninPage;
