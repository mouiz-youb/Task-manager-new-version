import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuth = create((set) => ({
  user: null,
  login: (userData) => set(() => ({ user: userData })),
  logout: () => set(() => ({ user: null })),
}));
