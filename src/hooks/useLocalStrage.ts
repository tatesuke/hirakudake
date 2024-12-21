import { useEffect, useState } from "react";

/** ローカルストレージを扱う。 */
export function useLocalStrage<T>(key: string, initialValue?: T) {
  const [value, setValue] = useState<T>(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue !== null ? JSON.parse(savedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
