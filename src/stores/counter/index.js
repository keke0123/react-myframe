import {combineReducers} from "redux";
import rootAction from '../../actions'

function counterNumber(state = 0, action) {
    switch (action.type) {
        case rootAction.counterAction.UP_COUNT:
            return ++state;
        case rootAction.counterAction.DOWN_COUNT:
            return --state;
        default:
            return state
    }
}

const counterStore = combineReducers({
    counterNumber
});

export default counterStore;
