import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "../../components/sectionHeader";
import { getServices } from "../../services/readSheet";
import { IServices } from "../../../types/services.model";
import { ArrowUpRight } from "lucide-react";

const Services: React.FC = () => {
    const [services, setServices] = useState<IServices[]>([]);
    const [hovered, setHovered] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await getServices();
                setServices(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        !loading && (
            <section className="py-20 px-4 md:px-12 font-sans">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        tag="Services"
                        heading="Your success with our"
                        subheading="unmatched experience"
                    />
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onMouseEnter={() => setHovered(service.id)}
                            onMouseLeave={() => setHovered(null)}
                            className={`group transition-all duration-300 px-4 py-10 md:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between md:items-start gap-8 border-b
                                ${hovered === service.id ? "border-lime-400" : "border-neutral-800"}`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full md:w-1/2">
                                <span className="text-sm font-mono text-white/50">
                                    {String(service.id).padStart(2, "0")}
                                </span>
                                <div>
                                    <div className="text-sm md:text-base font-semibold text-white/80 mb-1">
                                        {service.category}
                                    </div>
                                    <h3
                                        className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${hovered === service.id
                                            ? "text-lime-400"
                                            : "text-white"
                                            }`}
                                    >
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full md:w-1/2 gap-6 md:gap-24">
                                <p className="text-sm md:text-base text-white/60 leading-relaxed">
                                    {service.description}
                                </p>
                                <button
                                    className={`mt-4 md:mt-0 self-start md:self-auto p-3 rounded-md transition-all duration-300 ${hovered === service.id
                                        ? "bg-lime-400 text-black"
                                        : "bg-neutral-900 text-white"
                                        }`}
                                >
                                    <ArrowUpRight size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    );
};

export default Services;