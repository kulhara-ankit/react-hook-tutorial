import React, { useState } from "react";
import useCustomeDocumentTitleHook from "../Hooks/useCustomeDocumentTitleHook";

function DocTitleTwo() {
  const [count, setCount] = useState(0);

  useCustomeDocumentTitleHook(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count + 1</button>
    </div>
  );
}

export default DocTitleTwo;

// Here we passing the custom hooks named 'useCustomeDocumentTitleHook'
