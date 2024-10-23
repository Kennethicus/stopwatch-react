import React, { createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();
function ComponentA() {
  const [user, setUser] = React.useState("TK");

  function add() {
    return "add";
  }

  return (
    <div className="component-a-to-d">
      <h2>Component A</h2>
      <h3>Hi {user}</h3>
      <UserContext.Provider value={{ user, add }}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
