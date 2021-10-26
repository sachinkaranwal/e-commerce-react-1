import { act } from "react-dom/test-utils";
import{
    PRODUCT_CATEGORY_LIST,
    SORT_HIGH_TO_LOW,
    SORT_LOW_TO_HIGH
} from '../constants/productListConstants';
import List from "../components/productsList";

const initialState = {productsList:List};

export const productsListReducer = (state = initialState,action) =>{
    switch(action.type){
        case "GET_PRODUCT_LIST":
            const { category, brand, order } = action.payload;
             let newList = [];
              if(category!=='all')
              newList = List.filter(item => item.category === category);
              if(brand!=='all')
              newList = newList.filter(item => item.brand === brand);
              if(order==='High To Low')
              newList.sort((a,b)=>{
                if(Number(a.price) < Number(b.price))
                  return 1;
                if(Number(a.price) > Number(b.price)){
                    return -1;
                }
                return 0;
            })
            if(order==='Low To High')
            newList.sort((a,b)=>{
                if(Number(a.price) < Number(b.price))
                  return -1;
                if(Number(a.price) > Number(b.price)){
                    return 1;
                }
                return 0;
            })
             return {
                 ...state,
                 productsList : newList
             }
            default:
                return state;

    }
}