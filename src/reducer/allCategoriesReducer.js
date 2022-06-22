import List from "../components/productsList";

const initialState = {allCategories:List.map( product => product.category)};

export const allCategoriesReducer = (state = initialState,action) =>{
    switch(action.type){
        case "GET_ALL_CATEGORY":
             return {
                 ...state,
                 allCategories : List.map( product => product.category)
             }
            default:
                return state;

    }
}