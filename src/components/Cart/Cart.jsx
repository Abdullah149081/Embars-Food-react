import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import "./Cart.css";

const Cart = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const URl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    fetch(URl)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="cart-container">
        <div className="food-container">
          {foods.map((food) => (
            <Food food={food} key={food.idMeal}></Food>
          ))}
        </div>

        <div>
          <p>cart detains</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
