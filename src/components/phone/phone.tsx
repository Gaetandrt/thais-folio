import { pageList } from "@/constant/constant";
import Image from "next/image";
import PhoneDescription from "./phone-description";
import PhoneHeader from "./phone-header";
import PhonePosts from "./phone-posts";
import PhoneStats from "./phone-stats";
import PhoneStory from "./phone-storys";

type PhoneProps = {
  setPage: (page: (typeof pageList)[number]) => void;
  page: (typeof pageList)[number];
};

function Phone({ setPage, page }: PhoneProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center z-50">
      <div className="relative w-[408px] h-[829px]">
        <Image
          src="/phone-mockup.png"
          alt="phone"
          fill={true}
          className="object-contain z-10 pointer-events-none"
        />

        <div className="absolute top-[2%] left-[5%] w-[90%] h-[96%] rounded-[30px] overflow-hidden z-0 bg-black">
          <div className="w-full h-full relative flex flex-col">
            <PhoneHeader />
            <div className="flex flex-col gap-4 px-4">
              <PhoneStats page={page} setPage={setPage} />
              <PhoneDescription setPage={setPage} />
              <PhoneStory setPage={setPage} />
            </div>
            <PhonePosts />
            <div className="absolute -bottom-2 left-0 w-full h-10 flex items-center justify-center">
              <Image
                src="/phone-home.svg"
                alt="phone-home"
                width={120}
                height={5}
                className="object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
