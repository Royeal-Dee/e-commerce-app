import React from "react";
import { useState, createContext, useContext } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  NavLink,
  NavBar,
} from "react-router-dom";
import useWindowSize from "./hooks/useWindowSize";
import { CartContextProvider } from "./context/CartProvider";

function Women() {
  let token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "http://fakestoreapi.com/products/category/women's clothing"
      );
      const data = await response.json();
      setProducts(data);
    };
  }, [setProducts]);

  return (
    <>
      {!token && <Redirect to="/login" />}
      {!setProducts && (
        <>
          <div className="product-container">
            <div className="product-item">
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} />
              </Link>
              <div className="product-info">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </>
      )}
      )
    </>
  );
}

export default Women;
