import {useState} from "react";
import ProductList from "./ProductList.jsx";

export default function MainShop() {
  const [cartCount, setCartCount] = useState(0);

  function handleCart() {
    setCartCount((prev) => prev + 1);
  }
  return (
    <div>
      <h1>Giỏ hàng: {cartCount} sản phẩm</h1>
      <ProductList addToCart={handleCart} />
    </div>
  );
}
