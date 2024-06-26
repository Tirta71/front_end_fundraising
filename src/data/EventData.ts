import eventThumb_1 from "@/assets/img/Team/my_profile.jpg";
import eventThumb_2 from "@/assets/img/Team/nf_logo.jpg";
import eventThumb_3 from "@/assets/img/Team/annisa.jpg";
import eventThumb_4 from "@/assets/img/Team/sarah.jpg";
import eventThumb_5 from "@/assets/img/Team/zavira.jpg";
import eventThumb_6 from "@/assets/img/Team/fadil.jpg";

interface DataType {
  id: number;
  page: string;
  thumb: string;
  title: string;
  job?: string;
  university: string;
  width: number;
  height: number;
  time?: string;
  item_bg?: string;
  desc?: string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}

const event_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    thumb: eventThumb_1.src,
    title: "Tirta Samara",
    job: "Front End Developer",
    university: "Universitas Komputer Indonesia",
    width: 100,
    height: 435,
    objectFit: "cover",
  },
  {
    id: 2,
    page: "home_1",
    thumb: eventThumb_2.src,
    title: "Nurul Fikri Computer",
    job: "Company",
    university: "Jagakarsa Jakarta Selatan",
    width: 300,
    height: 323,
    objectFit: "contain",
  },
  {
    id: 3,
    page: "home_1",
    thumb: eventThumb_3.src,
    title: "Annisa Luthfi F",
    job: "Back End Developer",
    university: "Universitas Sriwijaya",
    width: 300,
    height: 435,
  },
  {
    id: 4,
    page: "home_1",
    thumb: eventThumb_4.src,
    title: "SaraH Khoirunnisa",
    job: "Back End Developer",
    university: "Universitas Kuningan",
    width: 300,
    height: 335,
  },
  {
    id: 5,
    page: "home_1",
    thumb: eventThumb_5.src,
    title: "Zavira raihana salsabila",
    job: "Back End Developer",
    university: "Universitas Muria Kudus",
    width: 300,
    height: 447,
  },
  {
    id: 6,
    page: "home_1",
    thumb: eventThumb_6.src,
    title: "Muhammad fadilah",
    job: "Back End Developer",
    university: "Universitas Negeri MANADO",
    width: 300,
    height: 335,
  },
];

export default event_data;
