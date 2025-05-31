import { useDispatch, useSelector } from "react-redux";

export function ReduxCounter() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux Counter: {count}</h1>
      <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
    </>
  );
}