import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedUserHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import UseSuggestedUsers from "../../Hooks/useSuggestedUsers";

export default function SuggestedUSers() {
  const { isLoading, suggestedUsers } = UseSuggestedUsers();
  if (isLoading) return null;

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedUserHeader />

      {suggestedUsers.length !== 0 && (
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
      )}
      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}

      <Box alignSelf={"start"} fontSize={12} color={"gray.500"} mt={5}>
        © 2024 Built By{" "}
        <Link href="" target="_blank" color={"blue.500"} fontSize={14}>
          Basavakiran GS
        </Link>
      </Box>
    </VStack>
  );
}
