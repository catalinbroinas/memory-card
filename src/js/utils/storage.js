
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

export function getStorageItem(key) {
  return localStorage.getItem(key);
}

export function setStorageItem(key, value) {
  localStorage.setItem(key, value);
}

export function removeStorageItem(key) {
  localStorage.removeItem(key);
}

export function clearStorage() {
  localStorage.clear();
}
