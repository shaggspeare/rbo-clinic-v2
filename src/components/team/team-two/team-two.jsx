import DirectContactUs from "@/components/forms/direct-contact-us";

import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import BannerTeamTwo from "./banner-team-two";
import TeamArea from "./team-area";
import Footer from "@/layout/footer/footer";

const TeamTwo = () => {
  return (
    <>
      <HeaderTwo />
      <BannerTeamTwo />
      <TeamArea />
      <DirectContactUs />
        <Footer />
    </>
  );
};

export default TeamTwo;
