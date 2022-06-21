import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { addItemsToCart, removeItemsFromCart } from "../actions/cartAction";
import { Link } from "react-router-dom";

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity) => {
    const newQuantity = quantity + 1;
    dispatch(addItemsToCart(id, newQuantity));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQuantity = quantity - 1;
    if (quantity <= 1) {
      dispatch(removeItemsFromCart(id));
      return;
    }
    dispatch(addItemsToCart(id, newQuantity));
  };

  const removeFromCartHandler = (productId) => {
    dispatch(removeItemsFromCart(productId));
  };

  return (
    <div>
      <div className="cart">
        <div className="cart-list">
          <ul className="cart-list-container">
            <li>
              <h3>Shopping Cart</h3>
              <div>Price</div>
            </li>
            {cartItems.length === 0 ? (
              <div>Cart is empty</div>
            ) : (
              cartItems.map((item) => (
                <li>
                  <div className="cart-image">
                    <img src={item.image} alt="product" />
                  </div>
                  <div className="cart-name">
                    <div>
                      <Link
                        className="product-link"
                        to={"/product/:" + item.product}
                      >
                        {item.title}
                      </Link>
                    </div>
                    <div>
                      Quantity:
                      <button
                        onClick={() =>
                          decreaseQuantity(item.product, item.quantity)
                        }
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        onClick={() =>
                          increaseQuantity(item.product, item.quantity)
                        }
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="button"
                        onClick={() => {
                          console.log(item.product);
                          removeFromCartHandler(item.product);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="cart-price">₹{item.price}</div>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="cart-action">
          <h3>
            Subtotal ( {cartItems.reduce((a, c) => a + c.quantity, 0)} items) :
            ₹ {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
