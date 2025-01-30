import { Box, Flex, Spinner } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/Firebase";
import Navbar from "../Navbar/Navbar";

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;
  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
      {/*sidebar on the left */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", lg: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* Navbar on the top */}
      {canRenderNavbar ? <Navbar /> : null}

      {/* Right side of the page */}
      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", lg: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
}

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir={"column"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner size={"xl"} />
    </Flex>
  );
};
