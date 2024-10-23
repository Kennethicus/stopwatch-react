import React from "react";

function MyComponents() {
  const data = ["Apple", "Banana", "Watermelon"];
  const [foods, setFoods] = React.useState(data);

  const [addFood, setAddFood] = React.useState("");

  const elementFoods = foods.map((food, index) => (
    <li
      key={index}
      style={{ cursor: "pointer" }}
      onClick={() => deleteFunc(index)}
    >
      {food}
    </li>
  ));

  function addFruits() {
    setFoods((prevData) => [...prevData, addFood]);
    setAddFood("");
  }

  function change(event) {
    const { value } = event.target;
    setAddFood(value);
  }

  function deleteFunc(index) {
    setFoods((prevData) => prevData.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Food Data</h1>
      <ul>{elementFoods}</ul>
      <input value={addFood} type="text" onChange={change} />
      &nbsp;
      <button onClick={addFruits}>Add fruits</button>
    </div>
  );
}

export default MyComponents;
