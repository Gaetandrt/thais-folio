import Image from "next/image";

function PhoneHeader() {
  return (
    <header className="w-full mt-2 h-12 flex items-center justify-between px-4 shrink-0">
      <div className="flex items-center p-4">
        <span className="font-medium">
          {new Date().toLocaleTimeString().slice(0, 5)}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Image src="/phone-cellular.svg" alt="wifi" width={18} height={18} />
        <Image src="/phone-wifi.svg" alt="wifi" width={18} height={18} />
        <Image src="/phone-battery.svg" alt="wifi" width={26} height={26} />
      </div>
    </header>
  );
}

export default PhoneHeader;
