import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import './CartScreen.css'
import CartItemCard from "../../components/CartItemCard/CartItemCard";

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
              <h3>Your Cart - {cartItems.length}</h3>
            </li>
            {cartItems.length === 0 ? (
              <div>Cart is empty</div>
            ) : (
              cartItems.map((item) => (
                <li>
                  <CartItemCard 
                    item={item}
                    decreaseQuantity={decreaseQuantity}
                    increaseQuantity={increaseQuantity} 
                    removeFromCartHandler={removeFromCartHandler}
                    />
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="cart-action">
          <div className="totalPrice"><h3>
            Subtotal ( {cartItems.reduce((a, c) => a + c.quantity, 0)} items) :
            ₹ {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
          </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
