import { createStore } from "redux";
import {devToolsEnhancer} from 'redux-devtools-extension';
import rootREducer from "../reducers/rootReducer";

export const configureStore = () => {
    const store = createStore(rootREducer, devToolsEnhancer());

    return store;
}