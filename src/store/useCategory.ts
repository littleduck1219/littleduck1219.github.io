import { create } from 'zustand';

type CategoryStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useCategoryStore = create<CategoryStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
