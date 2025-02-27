import Image from "next/image";

function PhonePosts() {
  // Tableau des titres pour chaque intérêt
  const interestTitles = [
    "Je suis trop beau",
    "Et je suis celibataire",
    "Voudrais-tu me rencontrer ?",
    "Je te donne mon numéro",
    "Tu me rappelles ?",
    "Ok bb j'arrive",
  ];

  return (
    <div className="flex flex-col gap-2 flex-1 overflow-hidden">
      <h2 className="w-full text-center underline underline-offset-[6px] font-stretch-50% py-2">
        MES CENTRES D&apos;INTÊRETS
      </h2>
      <div className="grid grid-cols-3 gap-0.5">
        {interestTitles.map((title, index) => (
          <div
            key={index}
            className="aspect-square relative w-full group cursor-pointer"
          >
            <Image
              src="/gros-bg.png"
              alt={`Intérêt ${title}`}
              fill
              className="object-cover transition-all duration-300 group-hover:brightness-50"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
            {/* Overlay avec texte qui apparaît au survol */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold text-lg tracking-wider">
                {title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhonePosts;
