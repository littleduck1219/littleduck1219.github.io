import { create } from 'zustand';

type MobileStore = {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
};

const UseMobileStore = create<MobileStore>(set => ({
  isMobile: false,
  setIsMobile: (isMobile: boolean) => set({ isMobile }),
}));

export default UseMobileStore;
