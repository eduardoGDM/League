import Image from "next/image";

export default function Animation() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/wallpaper.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="filter brightness-20"
      />
    </div>
  );
}
