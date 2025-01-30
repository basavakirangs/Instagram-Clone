import { useSignOut } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth } from "../Firebase/Firebase";

export default function useLogout() {
  const [signOut, loading] = useSignOut(auth);
  const showToast = useShowToast();

  const handlelogout = async () => {
    try {
      await signOut();

      localStorage.removeItem("user-info");
      console.log("logged out");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { handlelogout, loading };
}
