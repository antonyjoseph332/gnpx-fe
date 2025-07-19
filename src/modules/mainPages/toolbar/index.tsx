import { FC } from "react";
import { ArrowRight } from "lucide-react"; // optional icon replacement

export const Topbar: FC = () => {
  return (
    <div className="topbar py-2 px-5">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-semibold">GNPX</h1>
        <button className="btn-primary flex items-center gap-2">
          Let's connect
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};