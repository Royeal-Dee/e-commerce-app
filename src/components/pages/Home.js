import { useState, useEffect } from "react";
// import ProductList from "../components/products/ProductList";

export default function Home() {
  const [product, setProduct] = useState([]);

  function renderProduct() {
    return product.map((product) => {
      return (
        <div className="product" key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      );
    });
  }

  function clearCart() {
    setProduct([]);
  }

  function setFilter(filter) {
    setProduct(filter);
  }

  function addToCart(product) {
    setProduct([...product, product]);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.results);
      })
      .catch((err) => {
        console.error("get Product Error: ", err);
      });
  }, []);

  return (
    <div className="product-container">
      <h1>Store</h1>
      <div className="store-filter-container">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <div>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
        {renderProduct()}
      </div>
    </div>
  );
}
