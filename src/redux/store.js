import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { searchReducer } from "./reducer"

const initialState={

}
const reducer=combineReducers({
 search:searchReducer
})

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store