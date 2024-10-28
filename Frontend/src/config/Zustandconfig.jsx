import { create } from 'zustand'

const useStore = create((set) => ({
    count: 1,
    display: "hidden",
    inc: () => set((state) => ({ count: state.count + 1 })),
    visibility: () => set((state) => ({ display: state.display === "hidden" ? "flex" : "hidden" })),
}));

export default useStore;
