import { Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MoreLogo } from "../../assets/constants";

export default function More() {
  return (
    <Tooltip
      hasArrow
      label={"More"}
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
        borderRadius={6}
        p={2}
        w={{ base: 10, lg: "full" }}
        justifyContent={{ base: "center", lg: "flex-start" }}
        _hover={{ bg: "gray.700", borderRadius: 4, textDecoration: "none" }}
      >
        <MoreLogo size={24} />
        <Box display={{ base: "none", lg: "block" }}>More</Box>
      </Link>
    </Tooltip>
  );
}
