import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface CustomSwiperProps {
  children: ReactNode[];
  autoplayDelay?: number;
  spaceBetween?: number;
  slidesPerView?: number;
  loop?: boolean;
  className?: string;
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  autoplayDelay = 2000,
  spaceBetween = 20,
  slidesPerView = 3,
  loop = true,
  className = "",
}) => {
  return (
    <Swiper
      className={className}
      modules={[Pagination, Autoplay, Navigation]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      autoplay={{ delay: autoplayDelay }}
      loop={loop}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView },
      }}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;