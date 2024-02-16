import { PageHeader } from "@/components/atoms/Header";
import DetailInput from "@/components/Inputs/Detail";

const NicknamePage = () => {
  const pageTitle = "등록";

  return (
    <section>
      <PageHeader title={pageTitle} />
      <DetailInput />
    </section>
  );
};

export default NicknamePage;
