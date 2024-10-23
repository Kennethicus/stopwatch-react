import React, { useEffect } from "react";

function Size() {
  const [size, setSize] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener remove");
    };
  }, []);

  useEffect(() => {
    document.title = `Size ${size.width} x ${size.height}`;
  }, [size]);

  function handleResize() {
    setSize((prevSize) => {
      return {
        ...prevSize,
        height: window.innerHeight,
        width: window.innerWidth,
      };
    });
  }

  return (
    <div>
      <p>Window height: {size.height} </p>
      <p>Window width: {size.width} </p>
    </div>
  );
}

export default Size;
