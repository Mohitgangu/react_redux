import { createStore, combineReducers } from "redux";

import { cakeReducer } from "./Cake";
import { IceCreamReducer } from "./IceCream";

const rootReducer = combineReducers({
    Cake: cakeReducer,
    iceCream: IceCreamReducer
});

export const store = createStore(rootReducer);