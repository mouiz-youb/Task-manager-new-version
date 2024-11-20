import { create } from "zustand";
export const useTask = create((set) => ({
  task: [],
  addtask: () => set((state) => ({ task: [...state.task, newtask] })),
}));
