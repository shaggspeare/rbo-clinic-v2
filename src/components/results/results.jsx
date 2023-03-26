import React from "react";
import Footer from "@/layout/footer/footer";
import ResultsShowdown from "@/components/results/results-showdown";
import Header from "@/layout/header/header";

const Results = () => {
    return (
        <>
            <Header withBg />
            <ResultsShowdown />
            <Footer />
        </>
    );
};

export default Results;
