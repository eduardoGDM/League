"use client";
import Image from "next/image";
import "./style.css";
import Profile from "../components/Login/sideBar/profile";

export default function TopBar() {
  const RP = 2;
  const blueEssence = 4000;
  return (
    <div className="border-b-2 border-[#3f4348] w-screen">
      <div className="flex justify-stretch">
        <div className="flex">
          <Image
            className=" rounded-lg p-2 m-2 cursor-pointer"
            src="/Rectangle 80.svg"
            alt="My SVG"
            width={100}
            height={100}
          />

          <div id="div" className="pt-[5%] pr-10">
            <button id="button">
              <h1 className="text-2xl"> Home</h1>
            </button>
            <button id="button">
              <h1 className="text-2xl"> TFT</h1>
            </button>
          </div>
        </div>
        <div id="div">
          <div className=" flex">
            <button id="button">
              <Image
                className=" rounded-lg p-2 m-2 cursor-pointer"
                src="/trophy-svgrepo-com (2).svg"
                alt="My SVG"
                width={50}
                height={50}
              />
            </button>
            <button id="button">
              <Image
                className=" rounded-lg p-2 m-2 cursor-pointer"
                src="/user-circle-o-svgrepo-com.svg"
                alt="My SVG"
                width={50}
                height={50}
              />
            </button>
            <button id="button">
              <Image
                className=" rounded-lg p-2 m-2 cursor-pointer"
                src="/backpack.svg"
                alt="My SVG"
                width={50}
                height={50}
              />
            </button>
            <button id="button">
              <Image
                className=" rounded-lg p-2 m-2 cursor-pointer"
                src="/hammer.svg"
                alt="My SVG"
                width={50}
                height={50}
              />
            </button>
            <button id="button">
              <Image
                className=" rounded-lg p-2 m-2 cursor-pointer"
                src="/coins.svg"
                alt="My SVG"
                width={50}
                height={50}
              />
            </button>
            <div id="button">
              <div className="flex ">
                <Image
                  className=" rounded-lg p-2 m-2 cursor-pointer"
                  src="/crystal-orange.svg"
                  alt="My SVG"
                  width={50}
                  height={50}
                />
                <h1 className="text-xl text-[#e7decc] pt-[15%]">{RP}</h1>
              </div>
              <div className="flex">
                <Image
                  className=" rounded-lg p-2 m-2 cursor-pointer"
                  src="/crystal.svg"
                  alt="My SVG"
                  width={50}
                  height={50}
                />
                <h1 className="text-xl text-[#e7decc] pt-[15%]">
                  {blueEssence}
                </h1>
              </div>
            </div>
            <div className="pl-[15%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
