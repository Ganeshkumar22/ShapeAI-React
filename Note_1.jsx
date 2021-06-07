import React from "react";
import image from "./img1.jpg";

function Note_1() {
  return (
    <div className="note">
      <img src= {image} alt="Bootcamp"></img>
      <h1>Basic Web-dev Bootcamp with Js and React.js</h1>
      <p>This was an amazing Bootcamp for basic web development using javascript
        and react.js, it covers everything from scratch by Shaurya sir.
      </p>
    </div>
  );
}

export default Note_1;
