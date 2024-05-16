import Image from "next/image";

import eventDetailsThumb from "@/assets/img/events/event-details.jpg"
import EventDetailsForm from "@/components/forms/EventDetailsForm";
import EventDetailsSidebar from "./EventDetailsSidebar";

interface ContentType {
   title_1: string;
   title_2: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   list: string[];
}

const content_data: ContentType = {
   title_1: "Clean Water Event",
   title_2: "Pelhabita morbi tristique",
   desc_1: (<>Phasellus eros orci, ornare ut ipsum quis, fringilla facilisis dui. Nunc dui est, pellentesque a elementum quis, feugiat sed lectus. Cras ut enim nec quam rutrum mattis. Fusce ante enim, luctus eleifend felis ac, ullamcorper consequat eros. Fusce purus nibh, ultricies et convallis non, luctus id ipsum. Donec dignissim metus rhoncus, tincidunt nibh sed, elementum lectus. Fusce enim nisl, cursus in magna consectetur, suscipit aliquet ante. Ut laoreet, ex ornare auctor Nulla viverra ex ullamcorper tortor cursus, nec convallis nunc rutrum. In justo magna, porta in elit non, iaculis ultrices lectus. Pellentesque fringilla, felis nec tincidunt ullamcorper, enim magna lobortis lacus, vitae mattis ante sapien viverra eros.</>),
   desc_2: (<>Aenean viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium, consectetur leo at, congue quNulndreriorta ante vitae tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiCurae; Vestibulum ligula libero, feugiat faucibus mattis eget, pulvinar et ligula. erat dignissim. Sed quis rutrum tellus, samet viverra felis. Cras sagittis sem simet urna feugiat rutrum. Nam nulla ipsum, venenatis  malesuada felis quis, ultricies convallis neque. Pellentesqstique fringilla tempus. Vivamus bibendum nibh in dolor pharetra, a euismod nulla dignissim. Aenean viverra tincidunt nibh in imperdiet nunc</>),
   desc_3: (<>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus etmagnis disparturient montesnascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel aliquet nec, vulputate eget, arcu. In enim justo rhoncus utimperdiet a venenatis vitae justo.</>),
   list: ["Kam adipiscin estibulum", "Food help for african people", "Kam adipiscin estibulum", "Suport Homeless people", "Volenteer", "Donation"],
}

const { title_1, title_2, desc_1, desc_2, desc_3, list } = content_data;

const EventDetailsArea = ({ single_event }: any) => {
   return (
      <div className="event-details-area py-120">
         <div className="container">
            <div className="row gap-60">
               <div className="col-lg-8">
                  <div className="event-details-content mb-65">
                     <div className="details-image mb-30">
                        {single_event?.thumb ? <Image src={single_event.thumb} alt="image" /> : <Image src={eventDetailsThumb} alt="image" />}
                     </div>
                     <h3 className="title">{single_event?.title ? single_event.title : title_1 }</h3>
                     <p>{desc_1}</p>
                     <p>{desc_2}</p>
                     <h5>{title_2}</h5>
                     <p>{desc_3}</p>
                     <ul className="list-style-two">
                        {list.map((li, index) => <li key={index}>{li}</li>)}
                     </ul>
                  </div>
                  <h4>Join With Us</h4>
                  <EventDetailsForm />
               </div>
               <EventDetailsSidebar />
            </div>
         </div>
      </div>
   )
}

export default EventDetailsArea
