import CauseDetailsArea from "@/components/causes/causes-details/CauseDetailsArea";
import Breadcrumb from "@/components/common/Breadcrumb";
import cause_data from "@/data/causeData";
import Wrapper from "@/layout/Wrapper";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import { fetchCauses } from "@/utils/fetchCause";

export const metadata = {
  title: "Cause Details - Donasi Pedia",
};
const index = ({ params }: { params: { id: number } }) => {
  const id_cause = Number(params.id);
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb page_title="Cause Details" page_list="Cause Details" />
        <CauseDetailsArea id_cause={id_cause} />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default index;
