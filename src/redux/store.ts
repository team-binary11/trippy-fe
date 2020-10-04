import { createStore, StoreEnhancer } from "redux";
import rootReducer from "./reducers";

type WindowWithDevTools = Window & {
    __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>
}

const isReduxDevtoolsExtenstionExist =
    (arg: Window | WindowWithDevTools):
        arg is WindowWithDevTools => {
        return '__REDUX_DEVTOOLS_EXTENSION__' in arg;
    }


export default createStore(
    rootReducer,
    isReduxDevtoolsExtenstionExist(window) ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
);
