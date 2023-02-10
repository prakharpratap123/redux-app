/*This is for individual reducer */
// import { createStore } from "redux";
// import cakeReducer from "./cake/cakeReducer";

// const store = createStore(cakeReducer);

// export default store;

/*This is for multiple reducer combined */
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// import { createLogger } from "redux-logger";
// const logger = createLogger();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
