import ContactUs from "@/components/contact/contact";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Контакти"} />
      <ContactUs />
    </Wrapper>
  );
};

export default index;
