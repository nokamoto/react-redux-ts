import { INCR } from "../actions/counter";
import { combineReducers } from "redux";

function count(state = 0, action) {
    switch(action.type) {
        case INCR:
            return state + action.value
        default:
            return state
    }
}

export const counterApp = combineReducers({value: count})
