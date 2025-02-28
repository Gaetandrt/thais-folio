import { pageList } from "@/constant/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";

type PhoneStatsProps = {
  setPage: (page: (typeof pageList)[number]) => void;
  page: (typeof pageList)[number];
};

function PhoneStats({ setPage, page }: PhoneStatsProps) {
  return (
    <>
      {/* Header du profil avec nom d'utilisateur */}
      <div className="flex items-center justify-center">
        <h2 className="text-lg font-semibold">thaïsbouzar</h2>
      </div>

      {/* Section profil avec photo et statistiques */}
      <div className="flex items-center">
        {/* Photo de profil */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-pink-500/50 p-[2px]">
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src="/gros-bg.png"
              alt="Photo de profil"
              fill
              className={cn(
                "object-cover",
                page !== "home" && "cursor-pointer"
              )}
              onClick={() => setPage("home")}
            />
          </div>
        </div>

        {/* Statistiques */}
        <div className="flex flex-1 justify-around ml-4">
          <div className="flex flex-col items-center">
            <span className="font-bold text-base">127</span>
            <span className="text-xs text-gray-500">Posts</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-base">1,254</span>
            <span className="text-xs text-gray-500">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-base">348</span>
            <span className="text-xs text-gray-500">Following</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneStats;
