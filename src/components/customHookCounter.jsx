import { useCounter } from "../hooks/useCounter";

export function CusomHookCounter() {
  const { reset, increment, decrement, count } = useCounter(5);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}