import { create } from "zustand";

const userProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  //addpost
}));

export default userProfileStore;
