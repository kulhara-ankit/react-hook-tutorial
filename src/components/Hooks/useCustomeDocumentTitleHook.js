import { useEffect } from "react";

function useCustomeDocumentTitleHook(count) {
  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);
}

export default useCustomeDocumentTitleHook;

// custume hooks always start with snmall alphabet
// in custome hook you don't need to import React
