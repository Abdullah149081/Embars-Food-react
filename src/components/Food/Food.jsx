import React from "react";
import "./Food.css";

const Food = (props) => {
  //   console.log(props);
  const { idMeal, strMeal, strMealThumb, strTags } = props.food;
  const handlerBtn = props.handlerBtn;

  return (
    <div className="food-details">
      <div className="food-content">
        <img src={strMealThumb} alt="" />
        <h2>Id:{idMeal}</h2>
        <p>Name: {strMeal}</p>
        <p>Tags: {strTags ? strTags : "Nothing"}</p>
        <button onClick={() => handlerBtn(props.food)}>Order Now</button>
      </div>
    </div>
  );
};

export default Food;
