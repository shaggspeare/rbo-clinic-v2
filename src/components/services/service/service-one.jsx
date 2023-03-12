
import Specialists from "@/common/specialists";
import DirectContactUs from "@/components/forms/direct-contact-us";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ServiceArea from "./service-area";
import Footer from "@/layout/footer/footer";

const ServiceOne = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <ServiceArea />
      <Specialists />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default ServiceOne;
