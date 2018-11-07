import { combineReducers } from "redux";
import { RECEIVE_POSTS, RECEIVE_POST_BY_ID, EDIT_POST } from "../actions/action-types";

const list = (state = [], action) => {
    switch(action.type){
        case RECEIVE_POSTS:
            return action.payload.posts;
        default:
            return state;
    }
}

const editing = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_POST_BY_ID:
            return action.payload.post;
        case EDIT_POST:
            return {};
        default:
            return state;
    }
};

export default combineReducers({
    list,
    editing
});
