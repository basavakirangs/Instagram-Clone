import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

export default function AuthPage() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} minH={"100vh"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="auth.png" alt="Phone Img" />
          </Box>
          <VStack spacing={4} align={"stretch"} mt={8}>
            <AuthForm />
            <Box textAlign={"center"}>Get The App</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="playstore.png" h={"10"} alt="playstore logo" />
              <Image src="microsoft.png" h={"10"} alt="mocrosoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}
