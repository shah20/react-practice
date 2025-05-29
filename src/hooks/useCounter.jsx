import { useState } from "react";

export function useCounter(intiVal = 0) {
    const [count, setCount] = useState(intiVal);

    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);
    const reset = () => setCount(intiVal);

    return {count, increment, decrement, reset}
}