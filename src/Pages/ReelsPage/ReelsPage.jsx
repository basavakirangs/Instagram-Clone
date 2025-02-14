import { Container, Flex } from "@chakra-ui/react";
import ExplorePosts from "../../components/Explore/ExplorePosts";
import ReelsPosts from "../../components/Reels/ReelsPosts";

export default function ReelsPage() {
  return (
    <Container maxW={"container.lg"} py={5}>
      <Flex
        px={{ base: "2", md: "4" }}
        maxW={"full"}
        mx={"auto"}
        flexDirection={"column"}
      >
        <ReelsPosts />
      </Flex>
    </Container>
  );
}
