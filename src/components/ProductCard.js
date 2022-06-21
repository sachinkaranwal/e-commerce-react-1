import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ productId, title, image, price, brand, isHome }) {
  return (
    <div className="product">
      <Link className="product-link" to={`/product/:${productId}`}>
        <img src={image} alt="" />
        <div className="product-info">
          <p>{title.substring(0, 50) + "..."}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
