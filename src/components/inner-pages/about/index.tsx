import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import Brand from "@/components/common/Brand";
import About from "@/components/homes/home-one/About";
import Features from "@/components/homes/home-one/Features";
import Volunteer from "@/components/homes/home-one/Volunteer";

const InnerAbout = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb page_title="About Us" page_list="About" style={false} />
        <Brand style={true} />
        <About />
        <Features />
        <Volunteer style={true} />
      </main>
      <FooterOne />
    </>
  );
};

export default InnerAbout;
