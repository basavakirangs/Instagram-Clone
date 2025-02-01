import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export default function useShowToast() {
  const toast = useToast();
  //useCallback is used to prevent infinite loop, also it caches the function
  const showToast = useCallback(
    (title, descrpition, status) => {
      toast({
        title: title,
        description: descrpition,
        status: status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );

  return showToast;
}
