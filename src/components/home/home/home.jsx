import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Counter from "../../../common/counter";
import Feedback from "./feedback";
import HeroBanner from "./hero-banner";
import ServiceArea from "./service-area";
import Specialists from "../../../common/specialists";
import Team from "../../../common/team";

const HomeOne = () => {
  return (
    <>
      <HeroBanner />
      <ServiceArea />
      <About />
      <Counter />
      {/*<Gallery />*/}
      <Specialists />
      <Appointment />
      <Team />
      <Feedback />
      {/*<Brands />*/}
      {/*<Cta_Area />*/}
      {/*<Blog />*/}
    </>
  );
};

export default HomeOne;
