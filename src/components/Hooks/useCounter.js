import {useState} from "react";

function useCounterHook(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + value);
  };
  const decrement = () => {
    setCount((prev) => prev - value);
  };
  const reset = () => {
    setCount(initialCount);
  };
  return [count, increment, decrement, reset]
}

export default useCounterHook;
