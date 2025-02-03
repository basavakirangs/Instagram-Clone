import { useEffect, useState } from "react";
import useAuthStore from "../Store/authStore";
import userProfileStore from "../Store/userProfileStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../Firebase/Firebase";

export default function useFollowUser(userId) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const { user, setUser } = useAuthStore();
  const { userProfile, setUserProfile } = userProfileStore();
  const showToast = useShowToast();

  const handleFollowerUser = async () => {
    setIsUpdating(true);
    try {
      const currentUserRef = doc(firestore, "users", user.uid);
      const userToFollowOrUnFollowRef = doc(firestore, "users", userId);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
      });
      await updateDoc(userToFollowOrUnFollowRef, {
        followers: isFollowing ? arrayRemove(user.uid) : arrayUnion(user.uid),
      });

      if (isFollowing) {
        setUser({
          ...user,
          following: user.following.filter((uid) => uid !== userId),
        });
        if (userProfile && userProfile.uid !== user.uid)
          setUserProfile({
            ...userProfile,
            followers: userProfile.followers.filter((uid) => uid !== user.uid),
          });
        if (userProfile && userProfile.uid === user.uid)
          setUserProfile({
            ...userProfile,
            following: userProfile.following.filter((uid) => uid !== userId),
          });

        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...user,
            following: user.following.filter((uid) => uid !== userId),
          })
        );
      } else {
        setUser({
          ...user,
          following: [...user.following, userId],
        });
        if (userProfile && userProfile.uid !== user.uid)
          setUserProfile({
            ...userProfile,
            followers: [...userProfile.followers, user.uid],
          });
        if (userProfile && userProfile.uid === user.uid)
          setUserProfile({
            ...user,
            following: [...user.following, userId],
          });
        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...user,
            following: [...user.following, userId],
          })
        );
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (user) {
      setIsFollowing(user.following.includes(userId));
    }
  }, [user, userId]);

  return { isUpdating, isFollowing, handleFollowerUser };
}
