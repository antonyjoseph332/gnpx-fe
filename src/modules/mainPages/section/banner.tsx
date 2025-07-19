import React from "react";
import { ArrowRight } from "lucide-react";
import { IBanner } from "../../../types/banner.model";
interface BannerProps {
    banner: IBanner | null; 
}
const Banner: React.FC<BannerProps> = ({ banner }) => {
    return (
        <>
            <section className="min-h-[80vh] flex items-center px-6 md:px-12 font-sans" style={{ background: "url('src/assets/banner_bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flex flex-row w-fit items-center justify-between">
                    <div className="flex flex-col gap-8 W-fit">
                        <div>
                            <div className="text-white text-lg flex items-center gap-2">
                                {banner?.title} <ArrowRight size={18} />
                            </div>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
                            {banner?.header} <br />
                            <span className="text-lime-400">{banner?.sub_header}</span>
                        </h1>
                    </div>
                </div>
            </section>
            <div className="py-20 px-6 md:px-12 font-sans bg-lime-400 text-black text-center text-xl italic">
                {banner?.about}
            </div>
        </>
    )
};

export default Banner;