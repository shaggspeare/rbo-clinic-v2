import SEO from "@/components/seo";
import ServiceDetails from "@/components/services/service-details/service-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Прайс-лист послуг" />
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
