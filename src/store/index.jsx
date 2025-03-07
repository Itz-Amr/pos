export const useStore = create((set) => ({
  count: 1,
  inc: () => set(() => ({})),
}));
