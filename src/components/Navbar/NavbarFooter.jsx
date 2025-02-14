import { Flex } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import Home from "../Sidebar/Home";
import Explore from "../Sidebar/Explore";
import Reels from "../Sidebar/Reels";
import Create from "../Sidebar/Create";
import Messages from "../Sidebar/Messages";
import Profile from "../Sidebar/Profile";

export default function NavbarFooter() {
  return (
    <Flex
      borderBottom={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"fixed"}
      bottom={0}
      left={0}
      bg={"black"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={5}
      pl={5}
      pr={5}
      zIndex={"overlay"}
    >
      <Home />
      <Explore />
      <Reels />
      <Create />
      <Messages />
      <Profile />
    </Flex>
  );
}
