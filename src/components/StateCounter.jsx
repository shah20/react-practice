import { useMemo } from "react";
import { useEffect } from "react";

export function StateCounter({count, setCount}) {

  useEffect(() => {
    console.log('Effect once')
  }, [])

  useEffect(() => {
    console.log('Effect when count change')
  }, [count])

  useMemo(() => {
    console.log('Memo when count changes')
  }, [count]);

  useMemo(() => {
    console.log('Memo when setCount changes')
  }, [setCount]);

  return (
    <>
      <h1>State Counter: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button>
    </>
  );
}