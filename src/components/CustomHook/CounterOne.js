import React from "react";
import useCounterHook from "../Hooks/useCounter";

function CounterOne() {
  
    const [count, increment, decrement, reset] = useCounterHook(0, 1)

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;

// Here we passing the custom hooks
