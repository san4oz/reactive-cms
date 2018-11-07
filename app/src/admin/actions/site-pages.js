import { REQUEST_DATA, RECEIVE_DATA, RECEIVE_SITE_PAGES, RECEIVE_SITE_PAGE, EDIT_SITE_PAGE } from "./action-types";
import API from "../api/API";

const requestData = () => ({
    type: REQUEST_DATA
});

const receiveData = () => ({
    type: RECEIVE_DATA
});

const receiveSitePages = (sitePages) => ({
    type: RECEIVE_SITE_PAGES,
    payload: {
        sitePages
    }
});

const receiveSitePage = (sitePage) => ({
    type: RECEIVE_SITE_PAGE,
    payload: {
        sitePage
    }
});

const editSitePage = () => ({
    type: EDIT_SITE_PAGE
});

export const fetchSitePages = () => (dispatch) => {
    dispatch(requestData());
    API.getSitePages(sitePages => {
        dispatch(receiveSitePages(sitePages));
        dispatch(receiveData());
    });   
};

export const fetchSitePage = (id) => (dispatch) => {
    dispatch(requestData());
    API.getSitePage(id, sitePage => {
        dispatch(receiveSitePage(sitePage));
        dispatch(receiveData());
    });
}

export const updateSitePage = (sitePage, ownProps) => (dispatch) => {
    dispatch(requestData());
    API.editSitePage(sitePage, () => {
        dispatch(editSitePage());
        dispatch(receiveData());
        ownProps.history.push('/admin/pages');
    })
}