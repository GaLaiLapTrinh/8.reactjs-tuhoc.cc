import {createContext, useState} from "react";
const CartContext = createContext();
export default CartContext;

function CartContextProvider({children}) {
  const [cartCount, setCartCount] = useState(0);

  function handleCart() {
    setCartCount((prev) => prev + 1);
  }

  const ctxValue = {cartCount, handleCart};

  return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>;
}

export {CartContextProvider};
