import { PageHeader } from "@/components/atoms/Header";
import EmailInput from "@/components/Inputs/Email";

const SignupPage = () => {
  const pageTitle = "등록";

  return (
    <section>
      <PageHeader title={pageTitle} />
      <EmailInput />
    </section>
  );
};

export default SignupPage;
