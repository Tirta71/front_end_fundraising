import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import Volunteer from "@/components/homes/home-one/Volunteer";

const Volunteers = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="Our Volinteers"
          page_list="Volinteers"
          style={false}
        />
        <Volunteer style={false} />
      </main>
      <FooterOne />
    </>
  );
};

export default Volunteers;
