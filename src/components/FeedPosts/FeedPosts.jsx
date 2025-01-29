import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

export default function FeedPosts() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>content wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost
            username="basavakiran gs"
            img="post1.webp"
            avatar="post1.webp"
          />
          <FeedPost
            username="Kavitha gs"
            img="post2.webp"
            avatar="post2.webp"
          />
          <FeedPost
            username="Shreya u gandhi"
            img="post5.jpg"
            avatar="post5.jpg"
          />
          <FeedPost
            username="Girish kumar"
            img="post4.jpeg"
            avatar="post4.jpeg"
          />
          <FeedPost username="Kiran gs" img="post3.webp" avatar="post3.webp" />
        </>
      )}
    </Container>
  );
}
