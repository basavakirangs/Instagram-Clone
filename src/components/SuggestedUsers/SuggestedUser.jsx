import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import useFollowuser from "../../Hooks/useFollowuser";
import useAuthStore from "../../Store/authStore";
import { Link } from "react-router-dom";

export default function SuggestedUser({ user, setUser }) {
  const { isFollowing, isUpdating, handleFollowerUser } = useFollowuser(
    user.uid
  );
  const authUser = useAuthStore((state) => state.user);

  const onFollowUser = async () => {
    await handleFollowerUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower !== authUser.uid)
        : [...user.followers, authUser.uid],
    });
  };

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`/${user.username}`}>
          <Avatar src={user.profilePicURL} size={"md"} />
        </Link>
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            <Link to={`/${user.username}`}>{user.username}</Link>
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          fontSize={13}
          bg={"transparent"}
          p={0}
          h={"max-content"}
          fontWeight={"medium"}
          color={"blue.400"}
          cursor={"pointer"}
          _hover={{ color: "white" }}
          onClick={onFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
}
