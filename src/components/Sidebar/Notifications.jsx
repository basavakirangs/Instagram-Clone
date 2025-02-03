import { Flex, Tooltip, Box } from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/constants";

export default function Notifications() {
  return (
    <Tooltip
      hasArrow
      label="Notifications"
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", lg: "none" }}
    >
      <Flex
        alignItems={"center"}
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, lg: "full" }}
        justifyContent={{ base: "center", lg: "flex-start" }}
      >
        <NotificationsLogo />
        <Box display={{ base: "none", lg: "block" }}>Notifications</Box>
      </Flex>
    </Tooltip>
  );
}
