import React from "react";
import "./card.css";

function Card({ uni }) {
  return (
    <div className="card">
      <h2>{uni.name}</h2>
      <h6>{uni.country}</h6>
      {uni.domains.map((d) => (
        <h5>{d}</h5>
      ))}
      <a href={uni.web_pages}>Visit website</a>
    </div>
  );
}

export default Card;
