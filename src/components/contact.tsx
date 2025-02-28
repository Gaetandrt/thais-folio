import Image from "next/image";
import { Button } from "./ui/button";

function Contact() {
  return (
    <div className="w-full h-full gap-10 flex items-center justify-center">
      <div className="relative min-w-[478px] h-[790px]">
        <Image
          className="rounded-[224px] shadow-lg object-cover"
          src={"/thais.png"}
          fill={true}
          alt="Thaïs Bouzard"
        />
      </div>
      <div className="flex flex-col gap-10 text-5xl">
        <h1 className="font-bold font-stretch-50%">CONTACTEZ MOI !</h1>
        <div className="flex flex-col gap-2 text-3xl">
          <p>07 62 24 74 84</p>
          <p>thaisbouzar@gmail.com</p>
        </div>
        <Button className="gap-2 bg-gradient-to-r from-[#529AFA] to-[#9747FF] font-bold cursor-default hover:border-none">
          JE VOUS RÉPONDS DÈS QUE POSSIBLE
        </Button>
      </div>
    </div>
  );
}

export default Contact;
