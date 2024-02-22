"use client";

import Image from "next/image";

export default function HomeEvent() {
  return (
    <div>
      <div className="text-[#ffff] font-bold pt-[5%] pl-[10%] flex">
        <div className="flex flex-col">
          <span className="text-2xl">ANIMATED TRAILER</span>
          <span className="text-3xl">ODYSSEY: WELCOME ABOARD </span>
          <span className="text-xs">
            Consider this your invite to join the gratest crew in the galaxy
          </span>
        </div>
        <Image
          className="rounded-lg p-2 m-2 cursor-pointer ml-[15%]"
          src="/tumb.png"
          alt="My SVG"
          width={700}
          height={700}
        />
      </div>
      <div className="flex justify-center">
        <div className="flex">
          <Image
            className=" rounded-lg p-2 m-2 cursor-pointer "
            src="/gameplayupdates.png"
            alt="My SVG"
            width={200}
            height={200}
          />
          <Image
            className=" rounded-lg p-2 m-2 cursor-pointer "
            src="/cinematic.png"
            alt="My SVG"
            width={200}
            height={200}
          />
        </div>
        <div className="flex pl-[10%]">
          <Image
            className=" rounded-lg p-2 m-2 cursor-pointer "
            src="/loja.png"
            alt="My SVG"
            width={150}
            height={150}
          />
          <Image
            className=" rounded-lg p-2 m-2 cursor-pointer"
            src="/loja2.png"
            alt="My SVG"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
