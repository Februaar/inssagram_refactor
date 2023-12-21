import { PageHeader } from "@/components/atoms/Header";
import CodeInput from "@/components/Inputs/Code";

const EmailConfirmationPage = () => {
  const pageTitle = "등록";

  return (
    <>
      <PageHeader title={pageTitle} />
      <CodeInput />
    </>
  );
};

export default EmailConfirmationPage;
