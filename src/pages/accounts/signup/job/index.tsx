import { PageHeader } from "@/components/atoms/Header";
import JobInput from "@/components/Inputs/Job";

const JobPage = () => {
  const pageTitle = "등록";

  return (
    <section>
      <PageHeader title={pageTitle} />
      <JobInput />
    </section>
  );
};

export default JobPage;
