import { PageHeader } from "@/components/atoms/Header";
import EmailInput from "@/components/Inputs/Email";

const SignupPage = () => {
  const pageTitle = "등록";

  return (
    <>
      <PageHeader title={pageTitle} />
      <EmailInput />
    </>
  );
};

export default SignupPage;
