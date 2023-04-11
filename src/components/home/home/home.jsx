import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Counter from "../../../common/counter";
import HeroBanner from "./hero-banner";
import ServiceArea from "./service-area";
import Specialists from "../../../common/specialists";
import Team from "../../../common/team";
import Testimonial from "@/common/testimonial";

const HomeOne = () => {
  return (
    <>
      <HeroBanner />
      <ServiceArea />
      <About />
      <Counter />
      <Specialists />
      <Appointment />
      <Team />

        <Testimonial bg_img={false} />
    </>
  );
};

export default HomeOne;
