import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

export const ShoppingContext = createContext();

export default function StateContext({ children }) {
  const [qty, setQty] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice,setTotalPrice]=useState(0)

  function IncreaseQty() {
    setQty((prevqty) => prevqty + 1);
  }

  function DecreaseQty() {
    setTotalQuantity(totalQuantity - 1);

    setQty((prevqty) => {
      if (prevqty - 1 < 1) return 1;
      return prevqty - 1;
    });
  }

  function onAdd(quantity, product) {
    setQty(0)
    setTotalQuantity((pretotal) => pretotal + quantity);
    setTotalPrice((prevtotal)=>prevtotal+product.Price*quantity)
   console.log(product.UID)
   console.log(cartItems)
    const exist = cartItems.find((item) => item.UID=== product.UID );
   
    if (exist) {
      setCartItems(
        cartItems.map((item) => item.UID === product.UID
          ? { ...exist, quantity: exist.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  }

  function removeTotalQuantity(product) {
    setTotalPrice((prevtotal)=>prevtotal-product.Price)
    setTotalQuantity((pretotal) => pretotal - 1);
    const exist = cartItems.find((item) => item.UID === product.UID);
    if (exist.quantity>1) {
      setCartItems(
        cartItems.map((item) =>
          item.UID === product.UID
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
    else{
        setCartItems(cartItems.filter((item)=>item.UID!==product.UID))
    }
  }

  return (
    <ShoppingContext.Provider
      value={{
        qty,
        IncreaseQty,
        DecreaseQty,
        cartItems,
        showCart,
        setShowCart,
        totalQuantity,
        setTotalQuantity,
        removeTotalQuantity,
        totalPrice,
        setTotalPrice,
        onAdd,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export const useStateContext = () => useContext(ShoppingContext);
