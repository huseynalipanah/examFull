import React, { createContext, useState } from "react";
import useLocalStorage from "use-local-storage";
export const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("basket", []);

  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      return setBasket([...basket, { ...item, count: 1 }]);
    }
    basket[index].count++;
    setBasket([...basket]);
  }
  function increase(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    basket[index].count++;
    setBasket([...basket]);
  }
  function decrease(item) {
    const index = basket.findIndex((x) => x._id === item._id);

    if (basket[index].count > 1) {
      basket[index].count--;
      setBasket([...basket]);
    }
  }
  function removeBasket(item) {
    setBasket(basket.filter((x) => x._id !== item._id));
  }
  return (
    <BasketContext.Provider
      value={{ basket, addBasket, increase, decrease, removeBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
