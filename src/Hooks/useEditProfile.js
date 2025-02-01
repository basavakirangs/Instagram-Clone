import { useState } from "react";
import useAuthStore from "../Store/authStore";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../Firebase/Firebase";
import { doc, updateDoc } from "firebase/firestore";
import userProfileStore from "../Store/userProfileStore";

export default function useEditProfile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const setUserProfile = userProfileStore((state) => state.setUserProfile);

  const showToast = useShowToast();

  const editProfile = async (selectedFile, inputs) => {
    if (isUpdating || !authUser) return;
    setIsUpdating(true);

    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, "users", authUser.uid);

    let URL = "";
    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
      }

      const updateUser = {
        ...authUser,
        fullName: inputs.fullname || authUser.fullname,
        username: inputs.username || authUser.username,
        bio: inputs.bio || authUser.bio,
        profilePicURL: URL || authUser.profilePicURL,
      };

      await updateDoc(userDocRef, updateUser);
      localStorage.setItem("user-info", JSON.stringify(updateUser));
      setAuthUser(updateUser);
      setUserProfile(updateUser);

      showToast("Success", "Profile updated successfully ", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { editProfile, isUpdating };
}
