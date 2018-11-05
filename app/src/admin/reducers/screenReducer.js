import { combineReducers } from "redux";
import { REQUEST_DATA, RECEIVE_DATA } from "../actions/action-types";

const main = (state = { isLoading: false }, action) => {
    switch(action.type){
        case REQUEST_DATA:
            return {
                isLoading: true
            };
        case RECEIVE_DATA:
            return {
                isLoading: false
            };
        default:
            return state;
    }
}

export default combineReducers({
    main
});