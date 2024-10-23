import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const { user, add } = useContext(UserContext);
  console.log(add());
  return (
    <div className="component-a-to-d">
      <h2>Component D</h2>
      <h3>See you {user}</h3>
    </div>
  );
}

export default ComponentD;
