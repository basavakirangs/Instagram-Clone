import Create from "./Create";
import Home from "./Home";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";

export default function SidebarItems() {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <Create />
      <Profile />
    </>
  );
}
