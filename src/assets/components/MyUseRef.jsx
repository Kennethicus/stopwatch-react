import React, { useEffect, useRef } from "react";

function MyUseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Component Render");
  });

  function click() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
    if (inputRef.current.value.trim() !== "") {
      console.log(inputRef.current.value);
    }
  }

  return (
    <div>
      <button
        onClick={click}
        style={{ marginTop: "10px", marginRight: "10px" }}
      >
        Click Me
      </button>
      <input type="text" name="name" id="" ref={inputRef} />
    </div>
  );
}

export default MyUseRef;
