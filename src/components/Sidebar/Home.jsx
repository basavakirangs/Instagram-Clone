import { Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Tooltip
      hasArrow
      label={item.text}
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
        {item.icon}
        <Box display={{ base: "none", lg: "block" }}>{item.text}</Box>
      </Link>
    </Tooltip>
  );
}
