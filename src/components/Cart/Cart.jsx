import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import Summary from "../Summary/Summary";
import "./Cart.css";

const Cart = () => {
  const [foods, setFoods] = useState([]);
  const [names, setNames] = useState([]);

  const handlerBtn = (food) => {
    const name = [...names, food];
    setNames(name);
  };

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
            <Food food={food} key={food.idMeal} handlerBtn={handlerBtn}></Food>
          ))}
        </div>

        <div className="summary-content">
          <div className="summary">
            <h2>Cart summary</h2>
            <p>Total order: {names.length}</p>
            {names.map((name) => (
              <Summary name={name}></Summary>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
