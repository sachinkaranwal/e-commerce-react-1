import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import productsList from '../components/productsList';
import Navbar from '../components/Navbar';
import { addItemsToCart } from "../actions/cartAction";
import { useDispatch } from 'react-redux';
import 'office-ui-fabric-react/dist/css/fabric.css';

function ProductScreen() {
    const params = useParams().productId;
    // console.log(params.substring(1));
    const dispatch = useDispatch();
    const product = productsList.find(item => item.id === params.substring(1) )
    const [quantity,setQuantity] = useState(1);
    const addToCartHandler = () =>{
        setQuantity(quantity+1);
         dispatch(addItemsToCart(params.substring(1),quantity));
    }

    return (
        <div>
            <Navbar />
        {/* go back to the previous page- home/products*/}
        {/* <Link to='/search/laptops' >Go back</Link> */}
        <div className="ms-Grid product-info main-area">
            <div className="ms-Grid-row">
                  <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4">
                      <img width="400px" src= {product.image} alt="/" />
                      
                  </div>
                  <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4">
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
            </div>
        </div>
   
        
        </div>
    )
}

export default ProductScreen
