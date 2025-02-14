import { useEffect, useState } from "react";
import useAuthStore from "../Store/authStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, query } from "firebase/firestore";
import { firestore } from "../Firebase/Firebase";

export default function useGetStatusProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [statusProfileUsers, setStatusProfileUsers] = useState([]);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();

  useEffect(() => {
    const getStatusProfileUsers = async () => {
      setIsLoading(true);
      try {
        const usersRef = collection(firestore, "users");
        const q = query(usersRef);
        const querySnapshot = await getDocs(q);
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        setStatusProfileUsers(users);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    if (authUser) getStatusProfileUsers();
  }, [authUser, showToast]);

  return { isLoading, statusProfileUsers };
}
