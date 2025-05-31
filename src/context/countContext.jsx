import { createContext } from "react";

const defaultContext = {
  count: 0
}

export const CountContext = createContext(defaultContext);