import React from "react";

function Card(props) {
  const { addData } = props;
  console.log(addData);
  return (
    <div className="card">
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={addData.name || ""}
        onChange={props.change}
      />
      &nbsp;
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={addData.age || ""}
        onChange={props.change}
      />
      &nbsp;
      <button onClick={props.click}>Add</button>
    </div>
  );
}

export default Card;
