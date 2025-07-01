import { useEffect, useState } from "react";

export function useLocaleStorage<Type>(key: string, initialValue: Type) {
  const [value, setValue] = useState<Type>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const jsonValue = localStorage.getItem(key);
      return jsonValue !== null ? JSON.parse(jsonValue) : initialValue;
    } catch (e) {
      console.log("LocaleStorage Error " + e);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log("LocaleStorage save error " + e);
    }
  }, [key, value]);

  return [value, setValue] as [Type, typeof setValue];
}
