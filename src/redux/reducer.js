import { TYPES } from "./constants";


export const searchReducer=(state={term:null},action)=>{
    switch(action.type){
        case TYPES.SET_SEARCH_TERM:
            return{
              ...state,
              term:action.payload
            }

           default:
               return state 
    }
}