import { useEffect, useState } from 'react';
import { getStorageValue } from '../utils/utils';

export const useStorage = (key, initialValue) => {
  const [storeValue, setStoreValue] = useState(() => {
    return getStorageValue(key, initialValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(storeValue));
  }, [key, storeValue]);

  return [storeValue, setStoreValue];
};
