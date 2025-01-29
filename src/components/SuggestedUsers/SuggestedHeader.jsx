import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function SuggestedUserHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="basavakiran gs" size={"lg"} src="/post1.webp" />
        <Text fontSize={12} fontWeight={"bold"}>
          Basavakiran gs
        </Text>
      </Flex>
      <Link
        to={"/auth"}
        as={RouterLink}
        fontSize={"14"}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Logout
      </Link>
    </Flex>
  );
}
