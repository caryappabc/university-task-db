import React from "react";
import { useSelector } from "react-redux";
import Card from "./Cards/Card";
import "./CardsContainer.css";

function CardsContainer() {
  const data = useSelector((state) => state.university);
  return (
    <div className="container">
      {data?.map((uni) => (
        <Card uni={uni} />
      ))}
    </div>
  );
}

export default CardsContainer;
