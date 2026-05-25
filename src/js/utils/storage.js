
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
  if (!isLocalStorageAvailable()) return;

  return localStorage.getItem(key);
}

export function setStorageItem(key, value) {
  if (!isLocalStorageAvailable()) return;

  localStorage.setItem(key, value);
}

export function removeStorageItem(key) {
  if (!isLocalStorageAvailable()) return;

  localStorage.removeItem(key);
}

export function clearStorage() {
  if (!isLocalStorageAvailable()) return;

  localStorage.clear();
}
