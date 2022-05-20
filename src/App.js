import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

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
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings toggleTopping={toogleTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
