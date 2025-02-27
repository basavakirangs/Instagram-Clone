import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/constants";

export default function Notifications() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
          onClick={onOpen}
        >
          <NotificationsLogo />
          <Box display={{ base: "none", lg: "block" }}>Notifications</Box>
        </Flex>
      </Tooltip>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Notifications</DrawerHeader>

          <DrawerBody>
            <h1>No Notifications</h1>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
