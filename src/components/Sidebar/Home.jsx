import { Link, Tooltip, Box } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Tooltip
      hasArrow
      label="Home"
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", lg: "none" }}
    >
      <Link
        display={"flex"}
        to={"/"}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, lg: "full" }}
        justifyContent={{ base: "center", lg: "flex-start" }}
      >
        <AiFillHome size={25} />
        <Box display={{ base: "none", lg: "block" }}>Home</Box>
      </Link>
    </Tooltip>
  );
}
