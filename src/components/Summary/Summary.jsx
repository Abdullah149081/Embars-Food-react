import React from "react";
import "./Summary.css";

const Summary = ({ cart }) => {
  const { strMeal } = cart;

  return (
    <div className="summary">
      <p>Name:{strMeal}</p>
    </div>
  );
};

export default Summary;
