import Create from "./Create";
import Home from "./Home";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Reels from "./Reels";
import Search from "./Search";
import Explore from "./Explore";
import Messages from "./Messages";
import Threads from "./Threads";
import AIStudios from "./AIStudios";

export default function SidebarItems() {
  return (
    <>
      <Home />
      <Search />
      <Explore />
      <Reels />
      <Messages />
      <Notifications />
      <Create />
      <Profile />
      <AIStudios />
      <Threads />
    </>
  );
}
