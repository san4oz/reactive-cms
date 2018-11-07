import Posts from "./posts";

const findPostById = (id) => Posts.find(post => post.Id == id);

const GET_POST_TIMEOUT = 600;
const GET_POST_BY_ID_TIMEOUT = 300;
const CHANGE_POST_TIMEOUT = 500;

const getSitePages = (callback) => setTimeout(() => callback(Posts), GET_POST_TIMEOUT); 
const getSitePage = (id, callback) => setTimeout(() => callback((findPostById(id))), GET_POST_BY_ID_TIMEOUT);
const editSitePage = (post, callback) => setTimeout(() => callback(post), CHANGE_POST_TIMEOUT);

export default {
    getSitePages,
    getSitePage,
    editSitePage
};