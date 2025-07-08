import { create } from "zustand";

const newChatDrawerStore = create((set) => ({
  open: false,
  setOpen: (state) => set({ open: state }),
}));

export default newChatDrawerStore;
