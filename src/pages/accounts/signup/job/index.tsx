import { PageHeader } from "@/components/atoms/Header";
import JobInput from "@/components/Inputs/Job";

const JobPage = () => {
  const pageTitle = "등록";

  return (
    <>
      <PageHeader title={pageTitle} />
      <JobInput />
    </>
  );
};

export default JobPage;
