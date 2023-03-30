import React from "react";
import "./Food.css";

const Food = ({ food }) => {
  console.log();
  const { idMeal, strMeal, strMealThumb, strTags } = food;

  return (
    <div className="food-details">
      <div className="food-content">
        <img src={strMealThumb} alt="" />
        <h2>Id:{idMeal}</h2>
        <p>Name: {strMeal}</p>
        <p>Tags: {strTags ? strTags : "Nothing"}</p>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Food;
