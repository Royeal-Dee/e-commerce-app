import axios from "axios";
export default axios.create({
  baseURL: "http://fakestoreapi.com",
  headers: {
    "Content-type": "application/json",
  },
});
