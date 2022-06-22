
const initialState = { isHomePage : false};

export const isHomePageReducer = (state = initialState,action) =>{
    switch(action.type){
        case "SET_HOMEPAGE":
             return {
                 ...state,
                 isHomePage: true
             }
        case "SET_NOTHOMEPAGE":
            return {
                ...state,
                isHomePage: false
        }
            default:
                return state;

    }
}