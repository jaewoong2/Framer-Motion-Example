import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const TOPPINGS = [
  "mushrooms",
  "peppers",
  "onions",
  "olives",
  "extra cheese",
  "tomatoes",
];

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px #fff",
    boxShadow: "0px 0px 8px #fff",
    transition: {
      duration: 0.3,
      /** sacle이 yoyo 처럼 작동 */
      yoyo: Infinity,
    },
  },
};

const Toppings = ({ toggleTopping, pizza }) => {
  const getSapnClass = useCallback(
    (topping) => {
      return pizza.toppings.includes(topping) ? "active" : "";
    },
    [pizza]
  );

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {TOPPINGS.map((topping) => {
          return (
            <motion.li
              key={topping}
              onClick={() => toggleTopping(topping)}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={getSapnClass(topping)}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>
      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
