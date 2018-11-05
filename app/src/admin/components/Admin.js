import React from "react";
import { Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import Reducer from "../reducers/rootReducer";
import "../index.scss";
import Sidebar from "./Sidebar";
import Header from "./Header";
import LandingPage from "./Landing";
import CreatePage from "./Pages/CreatePage";
import configureStore from "../store/configureStore";
import PageListContainer from "../containers/Pages/PageListContainer";

const store = configureStore();

const Admin = () => (
    <Provider store={store}>
        <div className="admin">
            <Header />
            <Sidebar />
            <main>
                <Switch>
                    <Route path="/admin" exact component={LandingPage} />
                    <Route path="/admin/pages" exact component={PageListContainer} />
                    <Route path="/admin/pages/new" exact component={CreatePage} />
                </Switch>
            </main>
        </div>
    </Provider>
);

export default Admin;