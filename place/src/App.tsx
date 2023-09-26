import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Board from "./components/Board";
import ColorSelector from "./components/ColorSelector";

function App() {
  let [currentColor, changeCurrentColor] = useState("red");
  function handleChange() {}
  return (
    <>
      <Board currentColor={currentColor} />
      <ColorSelector changeCurrentColor={changeCurrentColor} />
    </>
  );
}

export default App;
