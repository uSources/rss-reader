export const getStorage = ({ key, initialValue }) => {
  return localStorage.getItem(key) ?? initialValue;
};
