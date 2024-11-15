import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  descreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
// const auth = (state, action) => {
//   switch (action.type) {
//     case "Login":
//       return { user: action.payload };
//     case "Logout":
//       return { user: null };
//     default:
//       return state;
//   }
// };
// <State & Action>
export const useAuth = create((set) => ({
  user: null,
  login: (userData) => set(() => ({ user: userData })),
  logout: () => set(() => ({ user: null })),
}));
