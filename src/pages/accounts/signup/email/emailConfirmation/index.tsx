import { PageHeader } from "@/components/atoms/Header";
import CodeInput from "@/components/Inputs/Code";

const EmailConfirmationPage = () => {
  const pageTitle = "등록";

  return (
    <section>
      <PageHeader title={pageTitle} />
      <CodeInput />
    </section>
  );
};

export default EmailConfirmationPage;
