import Breadcrumb from "@/components/common/Breadcrumb";
import EventDetailsArea from "@/components/events/event-details/EventDetailsArea";
import event_data from "@/data/EventData";
import Wrapper from "@/layout/Wrapper";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";

export const metadata = {
   title: "Event Details Charite - Charity & Donation React Next js Template",
};
const index = ({ params }: { params: { id: number } }) => {
   const events = event_data.filter(items => items.page === "inner_page");
   const single_event = events.find((item) => Number(item.id) === Number(params.id));

   return (
      <Wrapper>
         <HeaderOne />
         <main>
            <Breadcrumb page_title="Blog Details" page_list="Blog Details" />
            <EventDetailsArea single_event={single_event} key={single_event?.id} />
         </main>
         <FooterOne />
      </Wrapper>
   )
}

export default index