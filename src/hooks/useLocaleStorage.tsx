import { useState } from "react";

export function useLocaleStorage<Type>(key: string, initialValue: Type) {
  const [storedValue, setStoredValue] = useState<Type>(() => {
    try {
      const jsonValue = localStorage.getItem(key);
      return jsonValue !== null ? JSON.parse(jsonValue) : initialValue;
    } catch (e) {
      console.log("LocaleStorage Error " + e);
      return initialValue;
    }
  });

  function setValue(value: Type | ((val: Type) => Type)) {
    try {
      if (value instanceof Function) {
        localStorage.setItem(key, JSON.stringify(value(storedValue)));
        setStoredValue(value(storedValue));
      } else {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
      }
    } catch (e) {
      console.log("LocaleStorage Error " + e);
    }
  }

  return [storedValue, setValue] as [Type, typeof setValue];
}
