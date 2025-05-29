import { useEffect, useMemo, useState } from "react";

export function SubCounter({count, setCount, memDep}) {
  const [memoVar, setMemoVar] = useState();

  useEffect(() => {
    console.log('Initial Render.');
  }, []);

  useEffect(() => {
    console.log('Count updated');
  }, [count]);

  useMemo(() => {console.log('memo Called');}, [count]);
  useMemo(() => {console.log('memDep updated Called');}, [memDep]);

  
  return (
    <>
      <h1>Sub Counter</h1>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}