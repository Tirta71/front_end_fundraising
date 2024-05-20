import { StaticImageData } from "next/image";

import features3Bg_1 from "@/assets/img/features/feature-bg-red.jpg";
import features3Bg_2 from "@/assets/img/features/feature-bg-green.jpg";
import features3Bg_3 from "@/assets/img/features/feature-bg-yellow.jpg";

interface DataType {
  id: number;
  page: string;
  icon_bg?: string;
  icon_name?: string;
  title: string;
  desc: string;
  btn_bg?: string;
  bg_img?: StaticImageData;
  item_bg?: string;
}

const features_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    icon_name: "flaticon-help",
    title: "Become a Volunteer",
    desc: "Join our community of volunteers and make a tangible difference in the lives of those in need. Your time and effort can bring hope and change.",
  },
  {
    id: 2,
    page: "home_1",
    icon_name: "flaticon-solidarity",
    icon_bg: "feature-item__icon--green",
    title: "Quick Fundraising",
    desc: "Support urgent causes with quick and effective fundraising. Every contribution helps us reach our goals faster and provide timely aid.",
  },
  {
    id: 3,
    page: "home_1",
    icon_name: "flaticon-donation",
    icon_bg: "feature-item__icon--yellow",
    title: "Start Donating",
    desc: "Make a difference today by donating to our various causes. Your generosity can bring immediate relief and long-term benefits to those in need.",
  },
  {
    id: 4,
    page: "home_1",
    icon_name: "flaticon-solidarity",
    icon_bg: "feature-item__icon--green",
    title: "Quick Fundraising",
    desc: "Engage in fast and impactful fundraising efforts to support our initiatives. Your involvement can accelerate our mission to help communities.",
  },

  // home one single features
  {
    id: 1,
    page: "single_features",
    title: "Child Education Help",
    desc: "Your little help can make milion childrean smile model sentence structures",
  },
];

export default features_data;
