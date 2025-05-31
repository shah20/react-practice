import { useCount } from "../util/useCount";

export function HookCounter() {
  const { count, increment, decrement, reset } = useCount(10);

  return (
    <>
      <h1>Hook Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}