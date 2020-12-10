import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // emoji's dictionary
  const emojis = {
    "🤩": "Star-Struck",
    "😀": "Grinning Face",
    "💥": "Collision",
    "🙃": "Upside-Down Face",
    "🦊": "Fox",
    "❤️": "Red Heart"
  };
  // get array-Of-emojis
  var arrayOfEmojis = Object.keys(emojis);

  var [meaning, setMeaning] = useState("");

  // define function for change-event
  function changeEventHandler(event) {
    var userInputEmoji = event.target.value;

    var meaning = emojis[userInputEmoji];

    if (meaning === undefined) {
      meaning = "We Do Not Have This In Our DB";
    }
    // console.log(meaning);
    setMeaning(meaning);
  }
  // define function for click-event
  function clickEventHandler(index) {
    var meaning = emojis[index];
    setMeaning(meaning);
    // console.log(index);
  }

  return (
    <div className="App">
      <h2>Get Name Of Emoji</h2>
      <input onChange={changeEventHandler} />
      <br /> <br />
      <div> {meaning} </div>
      <br />
      <h3> Emoji's we know!</h3>
      {arrayOfEmojis.map((index) => {
        return (
          <span key={index} onClick={() => clickEventHandler(index)}>
            {index}{" "}
          </span>
        );
      })}
    </div>
  );
}
