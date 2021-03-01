import React from "react";

import PrevBtnContainer from "./PrevBtnContainer";
import NextBtnContainer from "./NextBtnContainer";
import ImageContainer from "./ImageContainer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="ImageCarousel">
        <ImageContainer />
        <div className="Buttons">
          <PrevBtnContainer />
          <NextBtnContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
