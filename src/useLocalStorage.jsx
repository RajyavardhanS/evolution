import { useEffect, useState } from 'react';

const PREFIX = 'codpen_';

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    
    if (jsonValue === null) return typeof initialValue === 'function' ? initialValue() : initialValue;

    try {
      return JSON.parse(jsonValue);
    } catch (error) {
      console.error(`Error parsing JSON from localStorage for key "${prefixedKey}":`, error);
      return initialValue; // Fallback to initialValue if parsing fails
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
