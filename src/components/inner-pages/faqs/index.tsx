import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import Brand from "@/components/common/Brand";

import FaqStyleOne from "./FaqStyleOne";

import FaqStyleTwo from "./FaqStyleTwo";

const Faqs = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="frequently asked questions"
          page_list="Faq"
          style={true}
        />

        <FaqStyleOne />

        <FaqStyleTwo />
        <Brand style={true} />
      </main>
      <FooterOne />
    </>
  );
};

export default Faqs;
