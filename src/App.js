import React, { useState } from "react";
import Images from "./Images";
import "./style.css";

function App() {

  const [selectedImg, setSelectedImg]=useState(Images[0]);

  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="Selected" className="selected" />
      </div>
      <div className="imgContainer">
        {Images.map((img, index) => (
          <img key={index} src={img} alt="Bursa Lezzetleri" 
      onClick={()=> setSelectedImg}
      />
      ))}
      </div>
    </div>
  );
}

export default App;
