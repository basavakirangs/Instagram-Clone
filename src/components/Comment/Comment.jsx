import { Avatar, Flex, Text, SkeletonCircle, Skeleton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useGetUserProfileById from "../../Hooks/useGetUserProfileById";
import { timeAgo } from "../../utils/timeAgo";

export default function Comment({ comment }) {
  const { isLoading, userProfile } = useGetUserProfileById(comment.createdBy);

  if (isLoading) return <CommentSkeleton />;
  return (
    <Flex gap={4}>
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} size={"sm"} />
      </Link>
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Link to={`/${userProfile.username}`}>
            <Text fontWeight={"bold"} fontSize={12}>
              {userProfile.username}
            </Text>
          </Link>
          <Text fontSize={14}>{comment.comment}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {timeAgo(comment.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
}

const CommentSkeleton = () => {
  return (
    <Flex gap={4} w={"full"} alignItems={"center"}>
      <SkeletonCircle h={10} w={10} />
      <Flex gap={1} flexDirection={"column"}>
        <Skeleton h={2} w={100} />
        <Skeleton h={2} w={50} />
      </Flex>
    </Flex>
  );
};
