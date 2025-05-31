import { useContext } from "react";
import { CountContext } from "../context/countContext";

export function ContextCounter() {
  const context = useContext(CountContext);

  return (
    <>
      <h1>Context Counter: {context.count}</h1>
      {/* <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button> */}
    </>
  );
}