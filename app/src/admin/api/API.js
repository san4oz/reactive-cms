import Posts from "./posts";

const findPostById = (id) => Posts.find(post => post.Id == id);

const GET_POST_TIMEOUT = 600;
const GET_POST_BY_ID_TIMEOUT = 300;

const getPosts = (callback) => setTimeout(() => callback(Posts), GET_POST_TIMEOUT); 
const getPost = (id, callback) => setTimeout(() => callback((findPostById(id))), GET_POST_BY_ID_TIMEOUT);

export default {
    getPosts,
    getPost
};