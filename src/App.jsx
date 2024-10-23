import React, { useState } from "react";
import "./App.css";
// import Card from "./assets/components/Card";
import { nanoid } from "@reduxjs/toolkit";
import Reflect from "./assets/components/reflect";
import { retry } from "@reduxjs/toolkit/query";
// import MyComponents from "./assets/components/MyComponents";
// import Size from "./assets/components/Size";
// import ComponentA from "./assets/components/ComponentA";
// import MyUseRef from "./assets/components/MyUseRef";
import Stopwatch from "./assets/components/Stopwatch";

function App() {
  const data = [{ id: nanoid(), isEdit: false, name: "TK", age: 23 }];

  const [info, setInfo] = React.useState(data);

  // ? add data
  const [addData, setAddData] = React.useState({});

  const infoElement = info.map((data) => (
    <Reflect
      key={data.id}
      data={data}
      edit={() => clickEdit(data.id)}
      editLogic={(event) => editLogic(event, data.id)}
      delete={() => clickDelete(data.id)}
    />
  ));

  function change(event) {
    const { name, type, value } = event.target;

    if (name === name) {
      setAddData((prevData) => {
        return {
          ...prevData,
          id: nanoid(),
          isEdit: false,
          [name]: type === "number" ? Number(value) : value,
        };
      });
    }
  }

  function clickDelete(id) {
    setInfo((prevData) => prevData.filter((item) => item.id !== id));
  }

  function clickAdd() {
    setInfo((prevData) => [...prevData, addData]);
    setAddData({});
  }

  function editLogic(event, id) {
    const { name, value } = event.target;

    setInfo((prevData) => {
      const changeData = prevData.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            [name]: value,
          };
        } else {
          return data;
        }
      });
      return changeData;
    });
  }

  function clickEdit(id) {
    setInfo((prevData) => {
      const updataData = prevData.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            isEdit: !data.isEdit,
          };
        } else {
          return data;
        }
      });

      return updataData;
    });
  }

  return (
    <>
      {/* <ComponentA /> */}
      {/* <Card change={change} click={clickAdd} addData={addData} />
      <div className="div-container">{infoElement}</div> */}
      {/* <MyComponents /> */}
      {/* <MyUseRef /> */}
      <Stopwatch />
    </>
  );
}

export default App;
