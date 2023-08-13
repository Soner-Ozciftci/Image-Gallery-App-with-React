import React, { useState } from "react";
import Images from "./Images";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src="" alt="Selected" className="selected" />
      </div>
      <div className="imgContainer">
        {Images.map((img, index) => (
          <img key={index} src={img} alt="Bursa Lezzetleri" />
        ))}
      </div>
    </div>
  );
}

export default App;
