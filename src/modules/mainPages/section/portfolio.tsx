import React from "react";
import { SwiperSlide } from "swiper/react";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../../components/sectionHeader";
import FallbackImage from "../../components/fallBackImage";
import { IPortfolio } from "../../../types/portfolio.model";
import CustomSwiper from "../../components/customSwiper";

interface PortfolioProps {
    portfolio: IPortfolio[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {

    return (
        <section className="py-20 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                <SectionHeader tag="Portfolio" heading="Recent Work" subheading="Portfolio">
                    <div className="text-end ml-auto w-full md:w-1/2">
                        <button className="btn-link">
                            Show More Works
                            <ArrowRight className="ml-2 w-4 h-4 inline" />
                        </button>
                    </div>
                </SectionHeader>
                <CustomSwiper>
                    {portfolio.map((video, index) => (
                        <SwiperSlide key={index}>
                            <a
                                href={video.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full p-4 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 transition-all shadow-lg hover:shadow-xl"
                            >
                                <FallbackImage src={video.thumbnail} alt={video.title} />
                                <h3 className="text-lime-400 text-lg font-semibold uppercase mb-1">{video.title}</h3>
                                <span className="inline-block px-2 py-1 text-xs font-medium text-neutral-300 bg-neutral-800 rounded-full">
                                    {video.platform}
                                </span>
                            </a>
                        </SwiperSlide>
                    ))}
                </CustomSwiper>
            </div>
        </section>
    );
};

export default Portfolio;