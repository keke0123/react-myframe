import {combineReducers} from "redux";

import counterStore from "./counter";

const rootStore = combineReducers({
    counterStore
});

export default rootStore;
