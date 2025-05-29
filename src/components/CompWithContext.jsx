import { useContext } from "react";
import { CounterContext } from "../hooks/counterContext";

export function CompWithContext() {
  const context = useContext(CounterContext);
  return (
    <>
      Component with context: {context.count}
      <button onClick={() => context.setCount(context.count + 1)}>Increment</button>
      <button onClick={() => context.setCount(context.count - 1)}>Decrement</button>
    </>
  );
}