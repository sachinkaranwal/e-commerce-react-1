import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({
  item,
  decreaseQuantity,
  increaseQuantity,
  removeFromCartHandler,
}) => {
  return (
    <div className="CartItemCard">
      <div className="itemImage">
        <img src={item.image} alt="product" />
      </div>
      <div className="itemInfo">
        <div className="itemName">
          <Link className="product-link" to={"/product/:" + item.product}>
            {item.title.substring(0, 50) + "..."}
          </Link>
        </div>
      </div>
      <div className="itemQuantityBox">
          <div className="quantityButton">
          <button onClick={() => decreaseQuantity(item.product, item.quantity)}>
            -
          </button>
          </div>
          <div className="itemQuantity">{item.quantity}</div>
          <div className="quantityButton">
          <button onClick={() => increaseQuantity(item.product, item.quantity)}>
            +
          </button>
          </div>
          
        </div>
      <div className="cart-price">
       <div>₹{item.price}</div>
       <button
            type="button"
            className="button"
            onClick={() => {
              console.log(item.product);
              removeFromCartHandler(item.product);
            }}
          >
            Remove
          </button></div>
    </div>
  );
};

export default CartItemCard;
