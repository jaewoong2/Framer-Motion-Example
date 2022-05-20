import React, { useCallback } from "react";
import { Link } from "react-router-dom";

let TOPPINGS = [
  "mushrooms",
  "peppers",
  "onions",
  "olives",
  "extra cheese",
  "tomatoes",
];

const Toppings = ({ toggleTopping, pizza }) => {
  const getSapnClass = useCallback(
    (topping) => {
      return pizza.toppings.includes(topping) ? "active" : "";
    },
    [pizza]
  );

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {TOPPINGS.map((topping) => (
          <li key={topping} onClick={() => toggleTopping(topping)}>
            <span className={getSapnClass(topping)}>{topping}</span>
          </li>
        ))}
      </ul>

      <Link to="/order">
        <button>Order</button>
      </Link>
    </div>
  );
};

export default Toppings;
