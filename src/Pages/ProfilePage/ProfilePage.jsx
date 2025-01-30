import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTab from "../../components/Profile/ProfileTab";
import ProfilePosts from "../../components/Profile/ProfilePosts";

export default function ProfilePage() {
  return (
    <Container maxW={"container.lg"} py={5}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}
      >
        <ProfileHeader />
      </Flex>
      <Flex
        px={{ base: "2", md: "4" }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.400"}
        flexDirection={"column"}
      >
        <ProfileTab />
        <ProfilePosts />
      </Flex>
    </Container>
  );
}
