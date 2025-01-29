import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedUserHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

export default function SuggestedUSers() {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedUserHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.400"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser name="Kiran" followers={2373} avatar="" />
      <SuggestedUser name="Shreya" followers={2192} avatar="" />
      <SuggestedUser name="GSBK" followers={1937} avatar="" />

      <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
        © 2024 Built By{" "}
        <Link href="" target="_blank" color={"blue.500"} fontSize={14}>
          Basavakiran GS
        </Link>
      </Box>
    </VStack>
  );
}
