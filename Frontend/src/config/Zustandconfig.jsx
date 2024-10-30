import { create } from 'zustand'

const useStore = create((set) => ({
    count: 1,
    display: "hidden",
    offset: 0,
    postnumber:5,
    incoffset: () => set((state) => ({ offset: state.offset + 5 })),
    visibility: () => set((state) => ({ display: state.display === "hidden" ? "flex" : "hidden" })),
    offsetzero:() => set((state) => ({offset:0}))
}));

export default useStore;
