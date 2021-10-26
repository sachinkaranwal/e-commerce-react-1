import { act } from "react-dom/test-utils";
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM
} from "../constants/cartConstants";

const initialState = {cartItems:[]};

export const cartReducer = (state = initialState,action) =>{
    console.log(state);
    switch(action.type){
        case ADD_TO_CART:
            const item = action.payload;
            console.log("insise cart reducer -- action.payload",item);
            console.log("insise cart reducer again -- action.payload",item);
            const isItemExist = state.cartItems.find(
                (i) => i.product === item.product
            );

            if(isItemExist){
                console.log("isItemExist",isItemExist)
                return{
                    ...state,
                    cartItems : state.cartItems.map((i) => i.product === isItemExist.product?item:i),
                };
            } else {
                return {
                    ...state,
                    cartItems:[...state.cartItems,item],
                };
            }

            case REMOVE_CART_ITEM:
                // console.log(action.payload);
                return{
                    ...state,
                    cartItems: state.cartItems.filter((i) =>
                    i.product !== action.payload)
                }
            default:
                return state;

    }
}