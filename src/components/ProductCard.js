import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';


function ProductCard({productId,title,image,price,brand}) {
    return (
        <div className="product">
            <Link className='product-link' to = {`/product/:${productId}`} >
            <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            </div>
            <img src={image} alt="" />
            </Link>
           
            {/* <button>Add To Basket</button> */}
        </div>
    )
}

export default ProductCard;
