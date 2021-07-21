import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./Reducers/index";
import { createStore, applyMiddleware } from "redux";

const middleware = [thunk, logger];
const composeEnacher = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(
  rootReducer,
  composeEnacher(applyMiddleware(...middleware))
);
export default store;
