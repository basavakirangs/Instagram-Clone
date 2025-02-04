import {
  Avatar,
  Box,
  Button,
  Flex,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowuser from "../../Hooks/useFollowuser";
import { timeAgo } from "../../utils/timeAgo";

export default function PostHeader({ post, creatorProfile }) {
  const { handleFollowerUser, isFollowing, isUpdating } = useFollowuser(
    post.createdBy
  );
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        {creatorProfile ? (
          <Link to={`/${creatorProfile.username}`}>
            <Avatar
              src={creatorProfile.profilePicURL}
              alt="user Profile pic"
              size={"sm"}
            />
          </Link>
        ) : (
          <SkeletonCircle size={10} />
        )}
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {creatorProfile ? (
            <Link to={`/${creatorProfile.username}`}>
              {creatorProfile.username}
            </Link>
          ) : (
            <Skeleton w={"100px"} h={"10px"} />
          )}
          <Box color={"gray.500"}>.{timeAgo(post.createdAt)}</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          size={"sm"}
          bg={"transparent"}
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
          onClick={handleFollowerUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
}
