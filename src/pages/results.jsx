import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import Results from "@/components/results/results";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Results" />
            <Results />
        </Wrapper>
    );
};

export default index;
