import Image from "next/image";

function PhonePosts() {
  return (
    <div className="flex flex-col gap-2 flex-1 overflow-hidden">
      <h2 className="w-full text-center underline underline-offset-[6px] font-stretch-50% py-2">
        MES CENTRES D&apos;INTÊRETS
      </h2>
      <div className="grid grid-cols-3 gap-0.5">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="aspect-square relative w-full">
            <Image
              src="/gros-bg.png"
              alt={`Intérêt ${index}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhonePosts;
