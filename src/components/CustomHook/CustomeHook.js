import React, { useState } from "react";
import useCustomeDocumentTitleHook from "../Hooks/useCustomeDocumentTitleHook";

function DocTitle() {
  const [count, setCount] = useState(0);

  useCustomeDocumentTitleHook(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count + 1</button>
    </div>
  );
}

export default DocTitle;

// Here we passing the custom hooks named 'useCustomeDocumentTitleHook'
