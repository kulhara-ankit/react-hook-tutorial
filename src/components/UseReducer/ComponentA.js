import React, { useContext } from "react";

import { CountContext } from "./ReducerWithContext";

function ComponentA() {
    const countContext = useContext(CountContext)
  return (
    <div>
      Component A

      <h1> Count in Compenent A : {countContext.countState}</h1>
      
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentA;
