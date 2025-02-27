import { Button } from "../ui/button";

function PhoneStory() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Button
          variant={"outline"}
          className="rounded-full border-[1.5px] h-16 w-16"
        >
          <span className="text-3xl">💻</span>
        </Button>
        <p className="text-sm text-white/90">UI/UX</p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <Button
          variant={"outline"}
          className="rounded-full border-[1.5px] h-16 w-16"
        >
          <span className="text-3xl">🎙️</span>
        </Button>
        <p className="text-sm text-white/90">COM&apos;</p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <Button
          variant={"outline"}
          className="rounded-full border-[1.5px] h-16 w-16"
        >
          <span className="text-3xl">🚸</span>
        </Button>
        <p className="text-sm text-white/90">ALSH</p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <Button
          variant={"outline"}
          className="rounded-full border-[1.5px] h-16 w-16"
        >
          <span className="text-3xl">🖌️</span>
        </Button>
        <p className="text-sm text-white/90">GRAPHISME</p>
      </div>
    </div>
  );
}

export default PhoneStory;
