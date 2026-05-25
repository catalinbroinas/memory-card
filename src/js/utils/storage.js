
export function isLocalStorageAvailable() {
  try {
    const key = "__test__";
    localStorage.setItem(key, key);
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};
