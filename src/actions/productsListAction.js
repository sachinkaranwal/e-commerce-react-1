import{
    GET_PRODUCT_LIST
} from '../constants/productListConstants';

export const getProductsList = ({category='all',brand='all',order='featured'}) => (dispatch,getState) =>{    
    console.log(order);
    dispatch({
        type:GET_PRODUCT_LIST,
        payload: {
               category,
               brand,
               order
        }
           
    })
}


