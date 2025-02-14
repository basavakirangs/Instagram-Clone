import { Box, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import useGetPostsAll from "../../Hooks/useGetPostsAll";
import ExplorePost from "./ExplorePost";

export default function ExplorePosts() {
  const { posts, isLoading } = useGetPostsAll();
  return (
    <Grid
      templateColumns={"repeat(3, 1fr)"}
      templateRows={"repeat(2, fr)"}
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
            <ExplorePost post={post} key={post.id} />
          ))}
        </>
      )}
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
