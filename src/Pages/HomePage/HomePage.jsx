import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUSers from "../../components/SuggestedUsers/SuggestedUsers";
import Status from "../../components/Status/Status";

export default function HomePage() {
  return (
    <Container maxW={"container.xl"}>
      <Flex gap={20}>
        <Flex flexDir={"column"}>
          <Box maxW={{ base: "md", sm: "container.sm", md: "container.md" }}>
            <Status />
          </Box>
          <Box flex={2} py={10}>
            <FeedPosts />
          </Box>
        </Flex>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          <SuggestedUSers />
        </Box>
      </Flex>
    </Container>
  );
}
