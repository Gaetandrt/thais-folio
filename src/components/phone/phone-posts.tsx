import Image from "next/image";

function PhonePosts() {
  const interestTitles = [
    {
      title: "COURSE À PIED",
      image: "/posts/running.png",
    },
    {
      title: "LECTURES",
      image: "/posts/reading.png",
    },
    {
      title: "DESIGNS",
      image: "/posts/design.png",
    },
    {
      title: "MONTAGE",
      image: "/posts/editing.png",
    },
    {
      title: "RANDONNÉES",
      image: "/posts/hiking.png",
    },
    {
      title: "VOYAGES",
      image: "/posts/travel.png",
    },
  ];

  return (
    <div className="flex flex-col gap-2 flex-1 overflow-hidden">
      <h2 className="w-full text-center underline underline-offset-[6px] font-stretch-50% py-2">
        MES CENTRES D&apos;INTÊRETS
      </h2>
      <div className="grid grid-cols-3 gap-0.5">
        {interestTitles.map((post, index) => (
          <div
            key={index}
            className="aspect-square relative w-full group cursor-pointer"
          >
            <Image
              src={post.image}
              alt={`Intérêt ${post.title}`}
              fill
              className="object-cover transition-all duration-300 group-hover:brightness-50"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-bold tracking-wider text-center">
                {post.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhonePosts;
