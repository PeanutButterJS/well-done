class StorageService {
  get(key) {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue && JSON.parse(storedValue).value;
    } catch (e) {
      return null;
    }
  }

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      return null;
    }
  }

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify({ value }));
    } catch (e) {
      return null;
    }
  }

  clear() {
    try {
      localStorage.clear();
    } catch (e) {
      return null;
    }
  }
}

export default new StorageService();
