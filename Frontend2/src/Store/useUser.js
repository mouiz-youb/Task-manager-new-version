import { create } from "zustand";

export const useUser = create((set) => ({
  user: null,
  token: null,
  login: (user, token) => set({ user, token }),
  logout: () => set({ user: null, token: null }),
  //   login: (userData) => set(() => ({ user: userData })),
  //   logout: () => set(() => ({ user: null })),
}));
