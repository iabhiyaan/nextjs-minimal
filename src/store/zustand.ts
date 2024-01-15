import { create } from "zustand";
import { produce } from "immer";

export default create((set) => ({
  name: "",
  email: "",
  setName(name) {
    set((state) => ({
      ...state,
      name,
    }));
  },
  setEmail(email) {
    set((state) => ({
      ...state,
      email,
    }));
  },
  user: null,
  setUser(user) {
    set((state) => ({
      ...state,
      user,
    }));
  },
  setDarkModeToUser(mode) {
    set(
      produce((state) => {
        state.user.profile.isDarkModeEnabled = mode;
      }),
    );
  },
}));
