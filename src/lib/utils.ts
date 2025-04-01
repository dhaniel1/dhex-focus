import { TodoStage } from "@/store/todos";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(input: string): string {
  return input
    .split(" ")
    .filter((word) => word.trim() !== "")
    .map((word) => {
      return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export function getLocalStorage(key: string) {
  try {
    const jsonData = localStorage.getItem(key);
    if (!jsonData) return null;
    return JSON.parse(jsonData);
  } catch (error: unknown) {
    console.error(error);
    return null;
  }
}

export function filterByProperty<T, K extends keyof T>(
  iterable: Array<T>,
  propertyName: K,
  filterStage: TodoStage
) {
  return iterable.filter((item) => item[propertyName] === filterStage);
}
