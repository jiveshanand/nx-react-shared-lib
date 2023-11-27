import { create } from 'zustand';
import zukeeper from 'zukeeper';

interface SharedState {
  data: string;
  setData: (data: string) => void;
}

export const useSharedStore = create<SharedState>(
  zukeeper((set: any) => ({
    data: '',
    setData: (data: any) => set({ data }),
  }))
);
