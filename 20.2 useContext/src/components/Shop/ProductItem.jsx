import CartButton from "./CartButton.jsx";

export default function ProductItem({addToCart}) {
  return (
    <div>
      <h3>Sản phẩm</h3>
      <CartButton addToCart={addToCart} />
    </div>
  );
}
