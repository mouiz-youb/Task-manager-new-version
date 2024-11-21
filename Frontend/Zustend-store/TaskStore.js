import { create } from "zustand";
export const useTask = create((set) => ({
  task: [],
  addtask: (newtask) => set((state) => ({ task: [...state.task, newtask] })),
}));
