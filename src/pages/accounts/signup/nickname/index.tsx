import { PageHeader } from "@/components/atoms/Header";
import DetailInput from "@/components/Inputs/Detail";

const NicknamePage = () => {
  const pageTitle = "등록";

  return (
    <>
      <PageHeader title={pageTitle} />
      <DetailInput />
    </>
  );
};

export default NicknamePage;
