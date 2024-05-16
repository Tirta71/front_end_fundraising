import { StaticImageData } from "next/image";

import eventThumb_1 from "@/assets/img/events/event1.jpg";
import eventThumb_2 from "@/assets/img/events/event2.jpg";
import eventThumb_3 from "@/assets/img/events/event3.jpg";
import eventThumb_4 from "@/assets/img/events/event4.jpg";
import eventThumb_5 from "@/assets/img/events/event5.jpg";
import eventThumb_6 from "@/assets/img/events/event6.jpg";

interface DataType {
  id: number;
  page: string;
  thumb: StaticImageData;
  title: string;
  date?: string | number;
  city: string;
  time?: string;
  item_bg?: string;
  desc?: string;
}

const event_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    thumb: eventThumb_1,
    title: "Tirta Samara",
    date: "Okt 08, 2001",
    city: "Kota Bogor",
  },
  {
    id: 2,
    page: "home_1",
    thumb: eventThumb_2,
    title: "Free Medical Camping",
    date: "Jan 18, 2014",
    city: "melbourne City",
  },
  {
    id: 3,
    page: "home_1",
    thumb: eventThumb_3,
    title: "Annisa",
    date: "Jan 18, 2015",
    city: "melbourne City",
  },
  {
    id: 4,
    page: "home_1",
    thumb: eventThumb_4,
    title: "Sarah",
    date: "Jan 18, 2016",
    city: "melbourne City",
  },
  {
    id: 5,
    page: "home_1",
    thumb: eventThumb_5,
    title: "Zavira",
    date: "Jan 18, 2013",
    city: "melbourne City",
  },
  {
    id: 6,
    page: "home_1",
    thumb: eventThumb_6,
    title: "Fadil",
    date: "Jan 18, 2016",
    city: "melbourne City",
  },
];

export default event_data;
