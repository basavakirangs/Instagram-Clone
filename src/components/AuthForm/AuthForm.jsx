import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

export default function AuthForm() {
  const [islogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="logo.png" alt="Instagram logo" />

          {islogin ? <Login /> : <Signup />}

          {/* -------------- or ---------------- */}
          <Flex
            gap={1}
            alignItems={"center"}
            justifyContent={"center"}
            py={4}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text px={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <GoogleAuth />
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box px={2} fontSize={14}>
            {islogin ? "Don't have an account?" : "Already have an account"}
          </Box>
          <Box
            onClick={() => setIsLogin(!islogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {islogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
