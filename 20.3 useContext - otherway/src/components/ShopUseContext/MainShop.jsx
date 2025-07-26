import ProductList from "./ProductList.jsx";
import {useContext} from "react";
import CartContext from "./CartContext.jsx";
import {CartContextProvider} from "./CartContext.jsx";

export default function MainShop() {
  //lấy giá trị từ context
  const {cartCount, handleCart} = useContext(CartContext);
  return (
    <CartContextProvider>
      <div>
        <h1>Giỏ hàng: {cartCount} sản phẩm</h1>
        <ProductList addToCart={handleCart} />
      </div>
    </CartContextProvider>
  );
  
}
