import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import useGetUserProfileById from "../../Hooks/useGetUserProfileById";

export default function Feedpost({ post }) {
  const { userProfile } = useGetUserProfileById(post.createdBy);

  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={post.imageURL} alt="post Image" />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  );
}
