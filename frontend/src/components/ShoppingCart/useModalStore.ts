// store/useModalStore.ts
import {create} from 'zustand';

type ModalState = {
  isReserveOpen: boolean;
  openReserve: () => void;
  closeReserve: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isReserveOpen: false,
  openReserve: () => set({ isReserveOpen: true }),
  closeReserve: () => set({ isReserveOpen: false }),
}));
