import React from "react";
import { Link, NavLink, NavBar } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import { useContext } from "react";
import ProductPage from "./src/components/products/ProductPage";
import { render } from "@testing-library/react";

function Electronics() {
  let token = localStorage.getItem("token");

  const [electronics, setElectronics] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getElectronics = async () => {
      const response = await fetch(
        "http://fakestoreapi.com/products/category/electronics"
      );
      const data = await response.json();
      setElectronics(data);
    };
  }, [setElectronics]);

  return (
    <>
      {!token && <Redirect to="/login" />}

      {!setProducts && (
        <>
          <h1>Electronics</h1>
          <div className="product-container">
            {electronics.map((item) => {
              return (
                <div className="product-item" key={item.id}>
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.title} />
                  </Link>
                  <div className="product-info">
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Electronics;
