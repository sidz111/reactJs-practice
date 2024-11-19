import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let itemList = ["first", "second", "third", "fourth", "fifth"];
  let itemList = [];
  // if (itemList.length === 0) {
  //   return <h2>Not Items here</h2>;
  // }
  return (
    <React.Fragment>
      <h1>Heaalthy Food</h1>
      {itemList.length === 0 ? (
        <h2 className="bg-danger">Not Items here</h2> //Adding turnary operation
      ) : null}
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
