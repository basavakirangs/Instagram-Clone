import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";

export default function Sidebar() {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Basavakiran" src="/Profilepic.png" />,
      text: "Profile",
      link: "basavakirangs",
    },
  ];
  return (
    <Box
      h={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: "2", lg: "4" }}
    >
      <Flex direction={"column"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", lg: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", lg: "none" }}
          borderRadius={6}
          _hover={{ bg: "WhiteAlpha.200" }}
          cursor={"pointer"}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              hasArrow
              label={item.text}
              placement="right"
              pl={1}
              openDelay={500}
              display={{ base: "block", lg: "none" }}
            >
              <Link
                display={"flex"}
                top={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "WhiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={"full"}
              >
                {item.icon}
              </Link>
              <Box display={{ base: "none", lg: "block" }}>{item.name}</Box>
            </Tooltip>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
