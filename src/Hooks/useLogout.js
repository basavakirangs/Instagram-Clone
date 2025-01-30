import { useSignOut } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth } from "../Firebase/Firebase";
import useAuthStore from "../Store/authStore";

export default function useLogout() {
  const [signOut, loading] = useSignOut(auth);
  const showToast = useShowToast();
  const logoutUser = useAuthStore((state) => state.logout);

  const handlelogout = async () => {
    try {
      await signOut();

      localStorage.removeItem("user-info");
      logoutUser();
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { handlelogout, loading };
}
