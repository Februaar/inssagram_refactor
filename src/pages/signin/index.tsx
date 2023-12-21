import * as SC from "@/styles/styled/signin";
import SigninInput from "@/components/Inputs/Signin";

const SigninPage = () => {
  return (
    <>
      <SC.Container>
        <SC.ContentArea>
          <SC.Title>💼</SC.Title>
          <SC.Logo>Inssagram</SC.Logo>
          <SC.Content>
            <SigninInput />
          </SC.Content>
        </SC.ContentArea>
      </SC.Container>
    </>
  );
};

export default SigninPage;
