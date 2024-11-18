import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Siddhu from "./Siddhu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello world</h1>
        <Siddhu></Siddhu>
      </div>
    </>
  );
}

export default App;
