import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Avatar,
  AvatarBadge,
  Center,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import useAuthStore from "../../Store/authStore";
import { CiCamera } from "react-icons/ci";
import usePreviewImg from "../../Hooks/usePreviewImg";
import useEditProfile from "../../Hooks/useEditProfile";

export default function EditProfile({ onClose, isOpen }) {
  const [inputs, setInputs] = useState({
    username: "",
    fullname: "",
    bio: "",
  });
  const authUser = useAuthStore((state) => state.user);
  const fileRef = useRef(null);
  const { selectedFile, handleImageChange, setSelectedFile } = usePreviewImg();
  const { isUpdating, editProfile } = useEditProfile();

  const handleEditProfile = async () => {
    try {
      await editProfile(selectedFile, inputs);
      setSelectedFile(null);
      onClose();
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={"black"}
          boxShadow={"xl"}
          border={"1px solid gray"}
          mx={3}
        >
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <Flex bg={"black"}>
              <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                bg={"black"}
                p={6}
                my={12}
              >
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                  Edit Profile
                </Heading>
                <FormControl>
                  <FormLabel>User Icon</FormLabel>
                  <Stack direction={["column", "row"]} spacing={6}>
                    <Center>
                      <Avatar
                        size="xl"
                        src={selectedFile || authUser.profilePicURL}
                        border={"2px solid white"}
                        onClick={() => fileRef.current.click()}
                      >
                        <Flex
                          opacity={0}
                          _hover={{ opacity: 1 }}
                          position={"absolute"}
                          top={0}
                          left={0}
                          right={0}
                          bottom={0}
                          bg={"whiteAlpha.700"}
                          transition={"all 0.3s ease"}
                          zIndex={1}
                          justifyContent={"center"}
                          borderRadius={"full"}
                          alignItems={"center"}
                        >
                          <CiCamera />
                        </Flex>
                      </Avatar>
                    </Center>
                    <Center w="full">
                      <Button w="full" onClick={() => fileRef.current.click()}>
                        Edit Profile Picture
                      </Button>
                    </Center>
                    <Input
                      type="file"
                      hidden
                      ref={fileRef}
                      onChange={handleImageChange}
                    />
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={"sm"}>Full name</FormLabel>
                  <Input
                    placeholder="Full Name"
                    size={"sm"}
                    type="text"
                    value={inputs.fullname || authUser.fullname}
                    onChange={(e) =>
                      setInputs({ ...inputs, fullname: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={"sm"}>Username</FormLabel>
                  <Input
                    placeholder="Username"
                    size={"sm"}
                    type="text"
                    value={inputs.username || authUser.username}
                    onChange={(e) =>
                      setInputs({ ...inputs, username: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={"sm"}>Bio</FormLabel>
                  <Input
                    placeholder="Bio"
                    size={"sm"}
                    type="text"
                    value={inputs.bio || authUser.bio}
                    onChange={(e) =>
                      setInputs({ ...inputs, bio: e.target.value })
                    }
                  />
                </FormControl>
                <Stack spacing={6} direction={["column", "row"]}>
                  <Button
                    bg={"red.400"}
                    color={"white"}
                    w="full"
                    _hover={{
                      bg: "red.500",
                    }}
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    w="full"
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handleEditProfile}
                    isLoading={isUpdating}
                  >
                    Save
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
