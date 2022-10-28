//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2019, 1, 1, 14);
const curentTime = date.getHours();

let greating;

// const customStyle = {
//   color: "Blue",
//   fontSize: "20px",
//   border: "1px solid black"
// };

const customStyle = {
  color: ""
};

if (curentTime < 12) {
  greating = "Good morning";
  customStyle.color = "red";
} else if (curentTime < 18) {
  greating = "Good afternoon";
  customStyle.color = "green";
} else {
  greating = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greating}
    </h1>
  </div>,
  document.getElementById("root")
);
