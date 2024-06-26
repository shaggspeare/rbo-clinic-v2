import Brands from "@/common/brands";
import Counter from "@/common/counter";
import Testimonial from "@/common/testimonial";
import React from "react";
import About from "./about";
import Blog from "./blog";
import HeroBanner from "./hero-banner";
import NavTab from "../../../common/nav-tab";
import VideoArea from "./video-area";
import ResultsShowdown from "@/components/results/results-showdown";

const Home_Three = () => {
  return (
    <>
      <div className="content-layout-right">
        <HeroBanner />
        <About />
        <ResultsShowdown />
        <Counter  cls="tp-common-area pt-130" />
        <NavTab />
        <VideoArea />
        <Testimonial bg_img={false} />
        <Blog />
        <Brands style_2={true} />
      </div>
    </>
  );
};

export default Home_Three;
