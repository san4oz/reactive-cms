import { combineReducers } from "redux";
import { RECEIVE_SITE_PAGES, RECEIVE_SITE_PAGE, EDIT_SITE_PAGE, CREATE_SITE_PAGE } from "../actions/action-types";

const list = (state = [], action) => {
    switch(action.type){
        case RECEIVE_SITE_PAGES:
            return action.payload.sitePages;
        default:
            return state;
    }
}

const editing = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_SITE_PAGE:
            return action.payload.sitePage;
        case EDIT_SITE_PAGE:
            return {};
        default:
            return state;
    }
};

export default combineReducers({
    list,
    editing
});
