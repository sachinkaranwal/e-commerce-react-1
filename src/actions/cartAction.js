import{
    ADD_TO_CART,
    REMOVE_CART_ITEM
} from '../constants/cartConstants';
import productsList from '../components/ProductsList/productsList';


export const addItemsToCart = (id,quantity) => (dispatch,getState) =>{
    const data = productsList.find(item => item.id===id);

    dispatch({
        type:ADD_TO_CART,
        payload:{ 
            product:data.id,
            title:data.title,
            price:data.price,
            image:data.image,
            quantity
           }
    })

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
    
}

export const removeItemsFromCart = (id) => (dispatch,getState) =>{
    
    dispatch({
        type:REMOVE_CART_ITEM,
        payload:id
    })

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
    
}