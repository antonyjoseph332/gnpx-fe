import { FC } from "react";
import { ArrowRight } from "lucide-react"; // optional icon replacement
import { useSheetData } from "../../services/sheetData";

export const Topbar: FC = () => {
  const sheetDataResult = useSheetData();
  return (
    <div className="topbar py-2 px-5">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-semibold">
          {sheetDataResult?.data?.contact?.logo ? (
            <img src={sheetDataResult.data.contact.logo} alt="GNPX Logo" className="h-8" />
          ) : (
            <span>GNPX</span>
          )}
        </h1>
        <a href={sheetDataResult?.data?.contact?.whatsapp} className="btn-primary flex items-center gap-2">
          Let's connect
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};