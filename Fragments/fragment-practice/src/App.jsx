import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";

function App() {
  let itemList = ["first", "second", "third", "fourth", "fifth"];
  // let itemList = [];
  // if (itemList.length === 0) {
  //   return <h2>Not Items here</h2>;
  // }
  let emptyMessage =
    itemList.length === 0 ? (
      <h2 className="bg-danger">Not Items here</h2>
    ) : null; //adding turnary operation for condition
  return (
    <>
      <h1>Heaalthy Food</h1>
      {emptyMessage}
      <FoodItems />
    </>
  );
}

export default App;
