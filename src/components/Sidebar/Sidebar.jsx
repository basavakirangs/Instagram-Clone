import { Avatar, Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/useLogout";
import SidebarItems from "./SidebarItem";

export default function Sidebar() {
  const { handlelogout, loading } = useLogout();

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
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
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
          _hover={{ bg: "whiteAlpha.200" }}
          cursor={"pointer"}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>
        <Tooltip
          hasArrow
          label="Logout"
          placement="right"
          pl={1}
          openDelay={500}
          display={{ base: "block", lg: "none" }}
        >
          <Flex
            onClick={handlelogout}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, lg: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", lg: "flex-start" }}
          >
            <BiLogOut />
            <Button
              display={{ base: "none", lg: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={loading}
            >
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
}
