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
import { MessagesLogo } from "../../assets/constants";

export default function Messages() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip
        hasArrow
        label={"Messages"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", lg: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          borderRadius={6}
          p={2}
          w={{ base: 10, lg: "full" }}
          justifyContent={{ base: "center", lg: "flex-start" }}
          _hover={{ bg: "gray.700", borderRadius: 4, textDecoration: "none" }}
          onClick={onOpen}
        >
          <MessagesLogo size={24} />
          <Box display={{ base: "none", lg: "block" }}>Messages</Box>
        </Flex>
      </Tooltip>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Messages</DrawerHeader>

          <DrawerBody>
            <h1>No Messages</h1>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
