import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const BASES = ["Classic", "Thin & Crispy", "Thick Crust"];
const Base = ({ addBase, pizza }) => {
  const getSapnClass = useCallback(
    (base) => {
      return pizza.base === base ? "active" : "";
    },
    [pizza]
  );

  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {BASES.map((base) => {
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={getSapnClass(base)}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
