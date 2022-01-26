import React from "react";
import CardsContainer from "./CardsContainer/CardsContainer";

import "./Console.css";

function Console({ data }) {
  return (
    <div className="console">
      <h1 className="heading">Seach any University accross the World</h1>
      <CardsContainer />
    </div>
  );
}

export default Console;
