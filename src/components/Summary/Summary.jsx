import React from "react";
import "./Summary.css";

const Summary = ({ name }) => {
  const { strMeal } = name;

  return (
    <div className="summary">
      <p>Name:{strMeal}</p>
    </div>
  );
};

export default Summary;
