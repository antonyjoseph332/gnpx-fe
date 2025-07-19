import React from "react";
import { SwiperSlide } from "swiper/react";
import { ArrowRight, Quote } from "lucide-react";
import SectionHeader from "../../components/sectionHeader";
import { ITestimonial } from "../../../types/testimonial.model";
import CustomSwiper from "../../components/customSwiper";

interface TestimonialProps {
  testimonials: ITestimonial[];
}

const Testimonial: React.FC<TestimonialProps> = ({testimonials}) => {

  return (
      <section className="py-20 px-6 md:px-12 font-sans">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="TESTIMONIAL" heading="Happy Client" subheading="Feedback">
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed md:mt-4">
              Their words are a testament to our commitment to excellence and our ability to bring their visions to life.
              Read on to see how we've made a lasting impact on their brands and projects.
            </p>
          </SectionHeader>
          <CustomSwiper>
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full px-4 py-10 bg-transparent flex flex-col">
                  <div className="mb-6">
                    <div className="bg-lime-400 w-16 h-16 rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <p className="text-base text-gray-300 leading-relaxed mb-10">{item.content}</p>
                  <div className="mt-auto">
                    <div className="text-xl font-serif uppercase">{item.name}</div>
                    <div className="text-gray-400 text-lg font-serif uppercase">{item.title}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
          <div className="mt-8 text-center">
            <button className="btn-link">
              Show All Reviews
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
  );
};

export default Testimonial;