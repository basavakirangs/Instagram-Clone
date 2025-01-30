import { Flex, Image, Text } from "@chakra-ui/react";

export default function GoogleAuth() {
  return (
    <Flex
      gap={2}
      alignItems={"center"}
      justifyContent={"center"}
      cursor={"pointer"}
    >
      <Image src="google.png" alt="Google Logo" w={5} />
      <Text color={"blue.500"}>Login with Google</Text>
    </Flex>
  );
}
