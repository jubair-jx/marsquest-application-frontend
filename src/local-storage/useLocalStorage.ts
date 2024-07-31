export function useLocalStorage() {
  const getItem = (key: string) => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  };

  const setItem = (key: string, value: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const removeItem = (key: string) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  };
  const clearItem = () => {
    return localStorage.clear();
  };
  return { getItem, setItem, removeItem, clearItem };
}
