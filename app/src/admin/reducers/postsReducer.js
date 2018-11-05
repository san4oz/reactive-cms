import { REQUEST_POSTS, RECEIVE_POSTS } from "../actions/action-types";

const posts = (state = [], action) => {
    switch(action.type){
        case RECEIVE_POSTS:
            return action.payload.posts;
        default:
            return state;
    }
}

export default posts;
