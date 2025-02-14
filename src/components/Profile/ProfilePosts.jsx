import {
  Box,
  Flex,
  Grid,
  GridItem,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../Hooks/useGetUserPosts";
import { FiPlus } from "react-icons/fi";
import useAuthStore from "../../Store/authStore";
import userProfileStore from "../../Store/userProfileStore";

export default function ProfilePosts() {
  const { isLoading, posts } = useGetUserPosts();
  const authUser = useAuthStore((state) => state.user);
  const { userProfile } = userProfileStore();

  const noPostsFound = !isLoading && posts.length === 0;
  if (noPostsFound) return <NoPostsFound />;
  if (!userProfile) return null;
  if (!authUser) return null;

  return (
    <Grid
      templateColumns={{ sm: "repeat(1, fr)", md: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          {posts.map((post) => (
            <ProfilePost post={post} key={post.id} />
          ))}
        </>
      )}
      {authUser.uid === userProfile.uid ? (
        <GridItem
          cursor={"pointer"}
          borderRadius={4}
          overflow={"hidden"}
          border={"1px solid"}
          borderColor={"whiteAlpha.300"}
          position={"relative"}
          placeContent={"center"}
          aspectRatio={1 / 1}
        >
          <Box
            placeSelf={"center"}
            bg={"whiteAlpha.700"}
            borderRadius={2}
            // onClick={""}
          >
            <FiPlus size={30} />
          </Box>
        </GridItem>
      ) : null}
    </Grid>
  );
}

const NoPostsFound = () => {
  return (
    <Flex flexDirection={"column"} textAlign={"center"} mx={"auto"} mt={10}>
      <Text fontSize={"2xl"}>No Posts Found 🫠</Text>
    </Flex>
  );
};
