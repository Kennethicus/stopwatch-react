import React from "react";

function Reflect(props) {
  const inputName = (
    <input
      value={props.data.name}
      name="name"
      onChange={props.editLogic}
      style={{ width: "50px" }}
      type="text"
    />
  );

  const inputAge = (
    <input
      value={props.data.age}
      name="age"
      onChange={props.editLogic}
      style={{ width: "20px" }}
      type="text"
    />
  );

  return (
    <div style={{ display: "flex" }}>
      <div>Name: {props.data.isEdit ? inputName : props.data.name}</div>
      &nbsp; &nbsp;
      <div>Age: {props.data.isEdit ? inputAge : props.data.age}</div>
      &nbsp; &nbsp; &nbsp;
      <button style={{ cursor: "pointer" }} onClick={props.edit}>
        {props.data.isEdit ? "Done" : "Edit"}
      </button>
      &nbsp;
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={props.delete}
      >
        Delete
      </button>
    </div>
  );
}

export default Reflect;
