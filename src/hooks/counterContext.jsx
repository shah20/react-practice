import { createContext } from "react";

const defaultContext = {
    count: 0,
    setContext: null
};

export const CounterContext = createContext(defaultContext);