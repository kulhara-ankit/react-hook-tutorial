import React from "react";
import useCounterHook from "../Hooks/useCounter";

function CounterTwo() {
    const [count, increment, decrement, reset] = useCounterHook(10, 10)
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;

// Here we passing the custom hooks named 'useCounterHook'
// It's similiar like useState i.e const [count, setCount] = useState()
