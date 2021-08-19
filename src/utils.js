const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key, initialValue) => {
  const property = localStorage.getItem(key);
  const initialState = property ? JSON.parse(property) : initialValue;

  return initialState;
};

export { setLocalStorage, getLocalStorage };
