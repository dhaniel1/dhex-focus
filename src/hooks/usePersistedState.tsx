"use client";

import { useEffect, useState } from "react";

function getPersistedState(key: string, initialValue: unknown) {
  try {
    const savedValue =
      typeof localStorage === undefined ? "" : localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  } catch (error) {
    console.log(error);
    return initialValue;
  }
}

function usePersistedState<S>(key: string, initialValue: S) {
  const [state, setState] = useState<S>(getPersistedState(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as [S, React.Dispatch<React.SetStateAction<S>>];
}

export default usePersistedState;
