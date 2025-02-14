import { Box, Flex } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/useLogout";

export default function Logout() {
  const { handlelogout, loading } = useLogout();
  return (
    <Flex
      onClick={handlelogout}
      alignItems={"center"}
      gap={4}
      _hover={{ bg: "whiteAlpha.400" }}
      borderRadius={6}
      p={2}
      w={"full"}
      mt={"auto"}
      justifyContent={"flex-start"}
    >
      <BiLogOut />
      Logout
    </Flex>
  );
}
