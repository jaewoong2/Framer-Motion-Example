import React, { useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // spring을 어느정도로 하냐
      mass: 0.5,
      // spring을 damping 시간 만큼 작동
      damping: 10,
      /**For instance, if staggerChildren is 0.01,
       * the first child will be delayed by 0 seconds,
       * the second by 0.01, the third by 0.02 and so on.
       * The calculated stagger delay will be added to delayChildren.
       */
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  // useEffect lifecycle hook, array with only setShowModal as dep
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 5000);

    return () => clearTimeout(timer);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
