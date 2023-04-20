import SEO from "@/components/seo";
import TeamTwo from "@/components/team/team-two/team-two";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Команда" />
      <TeamTwo />
    </Wrapper>
  );
};

export default index;
