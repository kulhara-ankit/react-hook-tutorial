import React, { useContext } from "react";

import { CountContext } from "./ReducerWithContext";

function ComponentC() {
    const countContext = useContext(CountContext)
  return (
    <div>
      Component C
      
      <h1> Count in Compenent C : {countContext.countState}</h1>
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentC;
