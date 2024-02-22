import { getServerSession } from "next-auth";
import ButtonLogout from "./ButtonLogout";
import { redirect } from "next/navigation";
import "./style.css";
import TopBar from "./TopBar";
import Image from "next/image";
import FriendList from "../components/friendList";
import Menu from "../components/Menu/page";
export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="bg-[#0a1016]  ">
      <div className="flex bg-[#0c1c2a] bg-opacity-60 ">
        <TopBar />
        <div className="flex ">
          <Image
            className=" rounded-lg p-2 m-2 cursor-pointer"
            src="/iconeLOL.svg"
            alt="My SVG"
            width={100}
            height={100}
          />
          <h1 className="font-mono font-bold text-white mt-[20%]">
            {session?.user.name}
            <div className="flex ">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <h1 className="text-xs text-green-500 ml-[2%] mb-[10%]">
                Online
              </h1>
            </div>
          </h1>
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}
