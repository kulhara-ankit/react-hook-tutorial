import React, { useContext } from "react";

import { CountContext } from "./ReducerWithContext";

function ComponentB() {
    const countContext = useContext(CountContext)
  return (
    <div>
      Component B
      
      <h1> Count in Compenent B : {countContext.countState}</h1>
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentB;
