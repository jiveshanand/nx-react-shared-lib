import { useSharedStore } from './sharedStore';

export const useSharedService = () => {
  const { data, setData } = useSharedStore();

  return {
    data,
    setData,
  };
};
