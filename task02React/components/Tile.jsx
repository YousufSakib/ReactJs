import React from "react";
import "./tile.css";
const clickHandler = (letter) => {
  let element = document.getElementById("output");
  let text = element.innerText;

  text += letter;
  let l = text.length;
  console.log(text[0]);
  if (
    text.length >= 11 &&
    text[l - 1] == text[l - 2] &&
    text[l - 1] == text[l - 3]
  ) {
    console.log("hi");
    text = text.slice(0, l - 3);
    text += "_";
  }
  console.log(text);
  console.log(letter);
  element.innerText = text;
};
export default function Tile(props) {
  return (
    <div onClick={() => clickHandler(props.letter)} className="tile">
      {props.letter}
    </div>
  );
}
