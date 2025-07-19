import { FC } from "react";
import {
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useSheetData } from "../../services/sheetData";

export const Footer: FC = () => {
  const sheetDataResult = useSheetData();
  
  return (
    <footer className="bg-black text-white border-t-4 border-lime-400 px-4 py-10">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-wrap md:flex-row md:justify-between md:items-start gap-8 md:gap-6 lg:gap-10">

          {/* Follow Us */}
          <div className="flex-1 min-w-[240px] text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex justify-center sm:justify-start gap-5">
              <a href={sheetDataResult?.data?.contact?.instagram} aria-label="Instagram" className="hover:text-lime-400 transition-all duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={sheetDataResult?.data?.contact?.linked_in} aria-label="LinkedIn" className="hover:text-lime-400 transition-all duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={sheetDataResult?.data?.contact?.whatsapp} aria-label="WhatsApp" className="hover:text-lime-400 transition-all duration-200">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex-1 min-w-[240px] text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <div className="space-y-3 text-sm md:text-base">
              <a href={`mailto:${sheetDataResult?.data?.contact?.email}`} className="flex justify-center sm:justify-start items-center gap-2 hover:text-lime-400 transition-all">
                <Mail className="w-5 h-5" />
                {sheetDataResult?.data?.contact?.email}
              </a>
              <a href={`tel:${sheetDataResult?.data?.contact?.mobile}`} className="flex justify-center sm:justify-start items-center gap-2 hover:text-lime-400 transition-all">
                <Phone className="w-5 h-5" />
                +{sheetDataResult?.data?.contact?.mobile}
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex-1 min-w-[240px] text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-3">Address</h2>
            <address className="not-italic text-sm md:text-base leading-relaxed">
              {sheetDataResult?.data?.contact?.address}
            </address>
          </div>
        </div>

        <hr className="border-t border-gray-700 mt-10" />

        <p className="text-xs text-center text-gray-400 mt-6">
          © {new Date().getFullYear()} GNPX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};