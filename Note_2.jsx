import React from "react";
import image from "./img2.jpeg";

function Note_2() {
  return (
    <div className="note">
      <img src= {image} alt="Bootcamp"></img>
      <h1>Basic Web-dev Bootcamp with Bootstrap</h1>
      <p>
        This was an amazing Bootcamp for web development using Bootstrap, it
        covers everything from scratch by Shaurya sir.
      </p>
    </div>
  );
}

export default Note_2;
