import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/*sidebar on the left */}
      {pathname !== "/auth" ? (
        <Box w={{ base: "70px", lg: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* Right side of the page */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", lg: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
}
