import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useLogout from "../../Hooks/useLogout";
import useAuthStore from "../../Store/authStore";

export default function SuggestedUserHeader() {
  const { loading, handlelogout } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  if (!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar size={"lg"} src={authUser.profilePicURL} />
        </Link>
        <Link to={`${authUser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ bg: "transparent" }}
        fontSize={"14"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        onClick={handlelogout}
        isLoading={loading}
      >
        Logout
      </Button>
    </Flex>
  );
}
