import { create } from 'zustand';
const personStore = create((set) => ({
  person: null,
  setPerson: (person) => set({ person }),
}));
export default personStore;