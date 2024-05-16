import Breadcrumb from "@/components/common/Breadcrumb";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";

import VolunteerVideo from "./VolunteerVideo";
import BecomeVolunteer from "@/components/homes/home-one/BecomeVolunteer";

const BecomeVolunteers = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <Breadcrumb
          page_title="Become Volunteers"
          page_list="Become Volunteers"
          style={false}
        />
        <VolunteerVideo style={false} />
        <BecomeVolunteer />
      </main>
      <FooterOne />
    </>
  );
};

export default BecomeVolunteers;
