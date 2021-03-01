import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import carouselReducer from "./carouselReducer";

const composedEnhancer = composeWithDevTools();

const store = createStore(carouselReducer, composedEnhancer);

export default store;
