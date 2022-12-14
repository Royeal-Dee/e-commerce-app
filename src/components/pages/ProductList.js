import { useState, useEffect, useContext } from "react";

import ProductItem from "../products/ProductPage";
import { CartContext } from "../../context/CartProvider";

export default function ProductPage(props) {
  const [products, setProduct] = useState({});
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [clearCart, addProduct] = useContext(CartContext);
  const [cart, setCart] = useState([]);

  function renderProducts() {
    setIsLoading(true);
    return products.map((item) => {
      return <ProductItem key={item.id} product={item} addProduct={item} />;
    });
  }

  useEffect(() => {
    const url = filter.length > 0 ? "/category/" + filter : "";

    fetch(`https://fakestoreapi.com/products${url}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.error("get Product Error: ", err));
  }, [filter]);

  return (
    <div className="product-container">
      <h1>Products</h1>
      <div className="store-filter-container">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="men's clothing">Men's Clothing</option>
        </select>
      </div>
    </div>
  );
}
