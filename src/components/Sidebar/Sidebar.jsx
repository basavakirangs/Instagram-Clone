import {
  Box,
  Flex,
  Link,
  Tooltip,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  InstagramLogo,
  InstagramMobileLogo,
  MoreLogo,
} from "../../assets/constants";
import SidebarItems from "./SidebarItem";
import More from "./More";
import Logout from "./Logout";

export default function Sidebar() {
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
      <Flex direction={"column"} gap={8} w={"full"} height={"full"}>
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
        <Flex direction={"column"} gap={4} cursor={"pointer"}>
          <SidebarItems />
        </Flex>

        <Box mt={"auto"}>
          <Menu>
            <MenuButton>
              <More />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Logout />
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
}
