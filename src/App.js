import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

/**
 * Key 값으로 작동한다.
 * Dom이 Dom 트리에서 제거가 되면 exit animation   이 작동한다
 */
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";

function App() {
  /**
   * pathname
   * search
   * hash
   * state
   * key
   */
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const toogleTopping = (topping) => {
    setPizza((prevPizza) => {
      if (!prevPizza.toppings.includes(topping)) {
        return { ...prevPizza, toppings: [...pizza.toppings, topping] };
      } else {
        return {
          ...prevPizza,
          toppings: prevPizza.toppings.filter((item) => item !== topping),
        };
      }
    });
  };

  return (
    <>
      <Header />
      <Modal showModal={showModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings toggleTopping={toogleTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} setShowModal={setShowModal} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
