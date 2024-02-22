import Image from "next/image";
import SideBar from "./components/Login/sideBar";
import Animation from "./components/Login/whatever";
import FriendList from "./components/friendList";
export default function Home() {
  return (
    <main>
      <div className="flex overflow-hidden ">
        <SideBar />
        <Animation />
      </div>
    </main>
  );
}
