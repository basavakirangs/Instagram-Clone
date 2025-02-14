import {
  Box,
  Input,
  Flex,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import Notifications from "../Sidebar/Notifications";

export default function NavbarHeader() {
  return (
    <Flex
      borderBottom={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"fixed"}
      top={0}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={10}
      bg="black"
      zIndex={"overlay"}
      pl={2}
      pr={2}
    >
      <Box display={{ base: "block", sm: "none" }}>
        <InstagramMobileLogo />
      </Box>
      <Box display={{ base: "none", sm: "block" }}>
        <InstagramLogo />
      </Box>
      <Box p={2}>
        <InputGroup justifyContent={"center"} alignItems={"center"}>
          <InputLeftElement>
            <SearchLogo />
          </InputLeftElement>
          <Input type="text" placeholder="Search" />
        </InputGroup>
      </Box>
      <Notifications />
    </Flex>
  );
}
