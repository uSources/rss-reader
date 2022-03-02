import { useEffect, useState } from 'react';

const getStorageValue = (key, initialValue) => {
  const item = localStorage.getItem(key);
  const initial = JSON.parse(item);
  return initial ?? initialValue;
};

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
