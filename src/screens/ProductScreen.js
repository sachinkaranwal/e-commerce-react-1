import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import productsList from "../components/productsList";
import Navbar from "../components/Navbar";
import { addItemsToCart } from "../actions/cartAction";
import { useDispatch } from "react-redux";
import "office-ui-fabric-react/dist/css/fabric.css";
import "./ProductScreen.css";

const ProductScreen = ( ) => {
  const history = useHistory()
  const params = useParams().productId;
  // console.log(params.substring(1));
  const dispatch = useDispatch();
  const product = productsList.find((item) => item.id === params.substring(1));
  const [quantity, setQuantity] = useState(1);
  const addToCartHandler = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    dispatch(addItemsToCart(params.substring(1), quantity));
    history.push("/cart")
  };

  return (
    <div className="productDetail">
      {/* go back to the previous page- home/products*/}
      {/* <Link to='/search/laptops' >Go back</Link> */}
      <div className="productImg">
        <img width="400px" src={product.image} alt="/" />
      </div>
        <div className="product-detail">
          <h1> {params.productId} </h1>
          <p>{product.title}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>

          <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductScreen;
