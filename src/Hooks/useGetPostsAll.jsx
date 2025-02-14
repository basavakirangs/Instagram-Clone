import { useEffect, useState } from "react";
import usePostStore from "../Store/postStore";
import useShowToast from "./useShowToast";
import { collection, getDocs, query } from "firebase/firestore";
import { firestore } from "../Firebase/Firebase";

export default function useGetPostsAll() {
  const [isLoading, setIsLoading] = useState(true);
  const { posts, setPosts } = usePostStore();
  const showToast = useShowToast();

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      setPosts([]);
      try {
        const q = query(collection(firestore, "posts"));
        const querySnapshot = await getDocs(q);

        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id });
        });
        posts.sort((a, b) => b.createdAt - a.createdAt);
        setPosts(posts);
      } catch (error) {
        showToast("Error", error.message, "error");
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, [setPosts, showToast]);
  return { isLoading, posts };
}
