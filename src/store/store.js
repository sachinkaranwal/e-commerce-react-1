import {createStore,combineReducers,applyMiddleware} from 'redux';
import { cartReducer } from '../reducer/cartReducer';
import { productsListReducer } from '../reducer/productsListReducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import productsList from '../components/productsList';

const reducer = combineReducers({
    cart:cartReducer,
    productsList:productsListReducer

});

let initialState = {
    cart : {
        cartItems : localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]
    },
    productsList: {
           productsList,
    }
}

const middleware = [thunk];

const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;