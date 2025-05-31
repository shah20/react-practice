import { useState } from "react"

export function useCount(initVal = 0) {
  const [count, setCount] = useState(initVal);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initVal);

  return {count, increment, decrement, reset}
}