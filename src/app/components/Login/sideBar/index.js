"use client";

import { Checkbox, TextField } from "@mui/material";
import Image from "next/image";
import { signIn } from "next-auth/react";
import FriendList from "../../friendList";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function sideBar() {
  return (
    <div className="h-screen w-[641px] bg-[#FFFFFF]">
      <div className="flex justify-center align-middle items-center pt-[10%]">
        <Image src="riot.svg" alt="My SVG" width={150} height={150} />
      </div>
      <div className="flex justify-center align-middle items-center pt-[10%]">
        <div className="flex flex-col justify-center align-middle items-center pt-[10%]">
          <h1 className="font-bold">Sign In</h1>
          <div className="flex flex-col pt-[10%]">
            <div className="py-[8%]">
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <div className="flex pt-[5%]">
              {/* <Image
                className=" bg-blue-900 rounded-lg p-2 m-2 cursor-pointer"
                src="/facebook-icon.png"
                alt="My SVG"
                width={30}
                height={30}
              />
              <Image
                className=" bg-white rounded-lg p-2 m-2 cursor-pointer"
                src="/google-icon.png"
                alt="My SVG"
                width={30}
                height={30}
              />
              <Image
                className=" bg-black rounded-lg p-2 m-2 cursor-pointer"
                src="/apple-icon.png"
                alt="My SVG"
                width={30}
                height={30}
              /> */}
              <Image
                onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
                className=" rounded-lg p-2 m-2 cursor-pointer"
                src="/github.svg"
                alt="My SVG"
                width={30}
                height={30}
              />
            </div>
            <div className="flex items-center">
              <Checkbox {...label} />
              <h1>STAY SIGNED IN</h1>
            </div>
            <div>
              <button
                onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              >
                Login
              </button>
            </div>
            <div>
              <Image
                className=" rotate-180 rounded-lg p-2 m-2 cursor-pointer flex ml-[10%]"
                src="/felcha.svg"
                alt="My SVG"
                width={50}
                height={50}
              />
            </div>
            <div className="mt-[100%]">
              <h1>Create account</h1>
              <h1>Cant sign in?</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
