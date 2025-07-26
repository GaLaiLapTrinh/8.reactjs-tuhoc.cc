import ProductItem from "./ProductItem.jsx";

export default function ProductList({addToCart}) {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ProductItem addToCart={addToCart} />
    </div>
  );
}
