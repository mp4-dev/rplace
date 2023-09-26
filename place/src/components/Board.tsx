import { useState } from "react";

function handleClick(setColor: Function, newColor: String) {
  console.log("setting color to: " + newColor);
  setColor(newColor);
}

interface pixelProps {
  useColor: string;
}

interface boardProps {
  currentColor: string;
}

function Pixel({ useColor }: pixelProps) {
  let [color, setColor] = useState(useColor);
  return (
    <>
      <div
        className={"pixel pixel" + color}
        onClick={() => {
          handleClick(setColor, useColor);
        }}
      ></div>
    </>
  );
}

export default function Board({ currentColor }: boardProps) {
  let width = 50;
  let height = 25;
  Array(width);
  return (
    <>
      {[...Array(height)].map((x, i) => {
        console.log("row: " + i);
        return (
          <div className="table-row">
            {[...Array(width)].map((y, j) => {
              console.log("pixel: " + j);
              return <Pixel useColor={currentColor} />;
            })}
          </div>
        );
      })}
    </>
  );
}
