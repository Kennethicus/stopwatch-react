import React from "react";
import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div className="component-a-to-d">
      <h2>Component B</h2>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
