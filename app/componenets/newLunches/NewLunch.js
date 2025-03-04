import Image from "next/image";

const imgs = [
  "https://prod-images.cooingestate.com/processed/compound/cover_image/1491/medium.webp",
  "https://prod-images.cooingestate.com/processed/compound/cover_image/1495/medium.webp",
  "https://prod-images.cooingestate.com/processed/compound/cover_image/1474/medium.webp",
];

export default function NewLunch() {
  return (
    <div className="container mx-auto my-16">
        <h3 className="text-2xl mb-6 font-semibold">
        New Launches

        </h3>
      <div className="flex md:justify-between justify-center gap-4 flex-wrap md:flex-nowrap">
        
        {imgs.map((img, index) => (
          <div key={index} className="relative w-1/3 h-[300px]">
            <Image
              src={img}
              alt="Lunch"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}