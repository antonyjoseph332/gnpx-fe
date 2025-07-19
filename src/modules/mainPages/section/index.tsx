import React from "react";
import Testimonial from "./testimonial";
import Portfolio from "./portfolio";
import Services from "./services";
import Banner from "./banner";
import { useSheetData } from "../../services/sheetData";

const Section: React.FC = () => {
  const sheetDataResult = useSheetData();

  const loading = sheetDataResult.loading ?? false;
  const sheetData = sheetDataResult.data ?? {
    portfolio: [],
    testimonial: [],
    services: [],
    banner: null,
  };

  return (
    loading ? (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    ) : (
      <>
        <Banner banner={sheetData.banner}/>
        <Services services={sheetData.services} />
        <Portfolio portfolio={sheetData.portfolio}/>
        <Testimonial testimonials={sheetData.testimonial}/>
      </>
    )
  );
};

export default Section;