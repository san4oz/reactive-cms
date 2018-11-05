import { combineReducers } from "redux";
import Posts from "./postsReducer";
import Screen from "./screenReducer";

export default combineReducers({
    Posts,
    Screen
});
