import { useToast } from "@chakra-ui/react";

export default function useShowToast() {
  const toast = useToast();
  const showToast = (title, descrpition, status) => {
    toast({
      title: title,
      description: descrpition,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };
  return showToast;
}
