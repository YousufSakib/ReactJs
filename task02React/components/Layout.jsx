import React from "react";
import Tile from "./Tile";
import "./layout.css";

export default function Layout() {
  return (
    <>
      <p id="output">Output :</p>
      <div className="container">
        <Tile letter={"A"} />
        <Tile letter={"B"} />
        <Tile letter={"C"} />
        <Tile letter={"D"} />
        <Tile letter={"E"} />
        <Tile letter={"F"} />
        <Tile letter={"G"} />
        <Tile letter={"H"} />
        <Tile letter={"I"} />
        <Tile letter={"J"} />
        <Tile letter={"K"} />
        <Tile letter={"L"} />
        <Tile letter={"M"} />
        <Tile letter={"N"} />
        <Tile letter={"O"} />
        <Tile letter={"P"} />
        <Tile letter={"Q"} />
        <Tile letter={"R"} />
        <Tile letter={"S"} />
        <Tile letter={"T"} />
        <Tile letter={"U"} />
        <Tile letter={"V"} />
        <Tile letter={"W"} />
        <Tile letter={"X"} />
        <Tile letter={"Y"} />
        <Tile letter={"Z"} />
      </div>
    </>
  );
}
