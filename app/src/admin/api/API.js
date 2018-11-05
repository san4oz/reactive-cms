import Posts from "./posts";

const GET_POST_TIMEOUT = 300;
const getPosts = (callback) => setTimeout(() => callback(Posts), GET_POST_TIMEOUT); 

export default {
    getPosts
};