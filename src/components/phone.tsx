import Image from "next/image";

function Phone() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[408px] h-[829px]">
        <Image
          src="/phone-mockup.png"
          alt="phone"
          fill={true}
          className="object-contain z-10 pointer-events-none"
        />

        <div className="absolute top-[2%] left-[5%] w-[90%] h-[96%] bg-background rounded-[30px] overflow-hidden z-0">
          <div className="w-full h-full relative flex flex-col">
            {/* Header du téléphone */}
            <header className="w-full h-16 bg-black border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
              <div className="flex items-center p-4">
                <span className="font-medium">
                  {new Date().toLocaleTimeString().slice(0, 5)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/phone-cellular.svg"
                  alt="wifi"
                  width={18}
                  height={18}
                />
                <Image
                  src="/phone-wifi.svg"
                  alt="wifi"
                  width={18}
                  height={18}
                />
                <Image
                  src="/phone-battery.svg"
                  alt="wifi"
                  width={26}
                  height={26}
                />
              </div>
            </header>

            {/* Body du téléphone */}
            <div className="flex-1 bg-white overflow-y-auto p-4">
              {/* Contenu du body */}
              <div className="w-full h-full">
                {/* Vous pouvez placer vos éléments ici */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
