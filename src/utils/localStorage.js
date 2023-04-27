export const setLocalStorage = (key, value) => {
  try {
    //local storage get only json data
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return error;
  }
};

export const getLocalStorage = (key, initialValue) => {
  try {
    //javascript get values only as objects
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (error) {
    return error;
  }
};

export const removeLocalStorage = (key) => localStorage.removeItem(key);
