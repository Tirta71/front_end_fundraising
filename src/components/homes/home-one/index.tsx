"use client";
import HeaderOne from "@/layout/headers/HeaderOne";
import HeroArea from "./HeroArea";
import UrgentCause from "./UrgentCause";
import ChooseArea from "./ChooseArea";
import Event from "./Event";
import Volunteer from "./Volunteer";
import CtaArea from "./CtaArea";
import FooterOne from "@/layout/footers/FooterOne";

import Features from "./Features";

const HomeOne = () => {
  return (
    <>
      <HeaderOne style_1={false} style_2={false} />
      <main>
        <HeroArea />
        <UrgentCause />

        <ChooseArea />

        <Features />
        <Event />

        <Volunteer style={true} />

        <CtaArea />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;
