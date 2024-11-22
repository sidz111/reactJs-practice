import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <React.Fragment>
      <h1>Heaalthy Food</h1>
      {emptyMessage}
      <ul className="list-group">
        {itemList.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
