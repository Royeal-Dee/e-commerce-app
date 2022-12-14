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

function Men() {
  let token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "http://fakestoreapi.com/products/category/men's clothing"
      );
      const data = await response.json();
      setProducts(data);
    };
  }, [setProducts]);
}

export default Men;
