import React, { useState } from "react";
import "./styles.css";

var heading = "Emopreter";

var emojiDB = {
  "😕": "Sad !",
  "😄": "Happy !",
  "🙄": "Rolling Eyes !",
  "🤒": "Sick !",
  "😎": "Smart ! ",
  "❤️": "Love !",

  "😱": "Shocked !",
  "😪": "Sleeping !",
  "😢": "Crying !",
  "🥱": "Yawning !",
  "🥴": "Dizzy ! ",
  "🤯": "Blown !"
};

var builtInEmojis = Object.keys(emojiDB);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function emojiClickHandler(emoji) {
    var meaning = emojiDB[emoji];
    setmeaning(meaning);
  }

  function onChangekHankdler(event) {
    var input = event.target.value;

    var meaning = emojiDB[input];

    if (meaning == undefined) {
      meaning = "DB Error: Emoji not present in Database!";
    }

    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1
        id="heading"
        style={{
          backgroundColor: "gold",
          color: "black",
          fontFamily: "Brush Script MT"
        }}
      >
        {heading}
      </h1>
      <input
        id="input"
        placeholder="Please put an Emoji !"
        onChange={onChangekHankdler}
      ></input>
      <h2 style={{ color: "gold" }}>{meaning}</h2>

      <h3 style={{ color: "wheat" }}>emojis we have </h3>
      {builtInEmojis.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "0.2rem", fontSize: "1.6rem", cursor: "pointer" }}
          >
            <span>{emoji}</span>
          </span>
        );
      })}
    </div>
  );
}
