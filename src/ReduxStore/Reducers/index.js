import { combineReducers } from "redux";
import {todoReducer} from "./todoReducer"

 const appReducer = combineReducers({
    todoReducer
});
export default  appReducer;



