import React from "react";
import Testimonial from "./testimonial";
import Portfolio from "./portfolio";
import Services from "./services";

const Section: React.FC = () => {
  return (
    <>
      <Services />
      <Portfolio />
      <Testimonial />
    </>
  );
};

export default Section;