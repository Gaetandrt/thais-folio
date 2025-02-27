import Image from "next/image";
import PhoneHeader from "./phone-header";
import PhoneStats from "./phone-stats";

function Phone() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[408px] h-[829px]">
        {/* Phone mockup */}
        <Image
          src="/phone-mockup.png"
          alt="phone"
          fill={true}
          className="object-contain z-10 pointer-events-none"
        />

        {/* Phone content */}
        <div className="absolute top-[2%] left-[5%] w-[90%] h-[96%] rounded-[30px] overflow-hidden z-0 bg-black">
          <div className="w-full h-full relative flex flex-col">
            <PhoneHeader />
            <PhoneStats />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
