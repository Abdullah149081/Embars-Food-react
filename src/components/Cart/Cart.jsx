import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import Food from "../Food/Food";
import Summary from "../Summary/Summary";
import "./Cart.css";

const Cart = () => {
  const [foods, setFoods] = useState([]);
  const [carts, setCarts] = useState([]);

  const handlerBtn = (food) => {
    const exists = carts.find((cart) => cart.idMeal === food.idMeal);
    if (exists) {
      Swal.fire({
        title: "Already exists !!!",
        icon: "warning",
        confirmButtonText: "Close",
      });
      return;
    }

    const newCart = [...carts, food];
    setCarts(newCart);
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
            <p>Total order: {carts.length}</p>
            {carts.map((cart) => (
              <Summary cart={cart}></Summary>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
