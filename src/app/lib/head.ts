
import { createContext, useContext } from "react";

export function createHead() {
  return {
    title: "",
    meta: [],
  };
}

export const HeadContext = createContext({
  title: "",
  meta: [],
});

export function useHead() {
  return useContext(HeadContext);
}
